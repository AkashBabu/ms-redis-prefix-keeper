# Stage-0 (Build & Test)
FROM node:latest as test
ARG ENV=test

RUN mkdir /ms-registry
WORKDIR /ms-registry

ADD package.json .
RUN ["npm", "i"]
# RUN ["npm", "rebuild"]

ADD . .

ENV NODE_ENV=${ENV}
RUN ["npm", "run", "build"]
RUN ["npm", "test"]




# Stage-1 (Installing only prod dependencies)
FROM node:latest as prod

RUN mkdir /ms-registry
WORKDIR /ms-registry

ADD package.json .
RUN ["npm", "i", "--only=production"]



# Stage-2 (Running)
FROM node:alpine 

LABEL maintainer=akashbabu
LABEL service="registry"
LABEL name="registry-store"

RUN mkdir /ms-registry
WORKDIR /ms-registry
COPY --from=prod /ms-registry/node_modules ./node_modules
RUN ["npm", "rebuild"]

COPY --from=test /ms-registry/dist ./dist
ADD . .
# COPY --from=test /ms-registry/node_modules ./node_modules
# COPY --from=test /ms-registry/dist ./dist
# COPY --from=test /ms-registry/package.json ./package.json

ENV NODE_ENV=production
ENV PORT=10001
EXPOSE ${PORT}

ENTRYPOINT [ "npm", "start"]

