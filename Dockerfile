GNU nano 6.2                                           Dockerfile                                                     FROM node:18-alpine as Runner

WORKDIR /app

COPY package*.json ./

RUN npm install -g npm@10.5.2

COPY . .

RUN npm install

EXPOSE 3000

CMD npm run dev