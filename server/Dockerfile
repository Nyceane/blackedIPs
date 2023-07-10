FROM node:18-slim

RUN apt-get -y update; apt-get -y install curl

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm","run","start"]
