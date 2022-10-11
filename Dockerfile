FROM node:16-alpine

LABEL key="SomeDev" 

RUN apk add bash

RUN mkdir /app && chown -R node:node /app
COPY ./wait-for-it.sh /
RUN chmod +x /wait-for-it.sh
RUN chown node:node /wait-for-it.sh

USER node
WORKDIR /app

COPY ./server/package.json .
RUN npm install