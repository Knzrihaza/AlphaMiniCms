FROM node:23-alpine as Runner

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@latest

COPY . .

RUN npm install

EXPOSE 3000

