FROM node:latest

LABEL maintainer=akashbabu
LABEL service="registry"
LABEL name="registry-store"

RUN mkdir /ms-registry
WORKDIR /ms-registry

ADD package.json .
RUN npm i
RUN npm rebuild

ADD . .

RUN ["npm", "run", "build"]
RUN ["npm", "test"]

ENV NODE_ENV=production
ENV PORT=10001
EXPOSE ${PORT}

ENTRYPOINT [ "npm", "start"]

