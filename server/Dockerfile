FROM node:18-slim

RUN apt-get -y update; apt-get -y install curl

RUN apt-get update && apt-get install -y gnupg software-properties-common && \
    curl -fsSL https://www.mongodb.org/static/pgp/server-4.2.asc | apt-key add - && \
    add-apt-repository 'deb https://repo.mongodb.org/apt/debian buster/mongodb-org/4.2 main' && \
    apt-get update && \
    apt-get install -y mongodb-org-tools

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD ["npm","run","start"]
