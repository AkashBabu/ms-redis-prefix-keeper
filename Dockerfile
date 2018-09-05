# Stage-0 (Build & Test)
FROM node:latest as test

RUN mkdir /ms-registry
WORKDIR /ms-registry

ADD package.json .
RUN ["npm", "i"]

ADD . .
RUN ["npm", "run", "build"]

ENV NODE_ENV=docker_test
ENTRYPOINT [ "npm", "start" ]




# Stage-1 (Installing only prod dependencies)
FROM node:latest as dep

ENV NODE_ENV=production

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
COPY --from=dep /ms-registry/node_modules ./node_modules
RUN ["npm", "rebuild"]

COPY --from=test /ms-registry/dist ./dist

ADD . .

ENV NODE_ENV=production
EXPOSE 10001

ENTRYPOINT [ "npm", "start"]

