FROM node:18-slim

WORKDIR /app

COPY package*.json ./

RUN npm install

RUN npm install -g esbuild

COPY . .

RUN npm run build

FROM node:18-slim

COPY --from=builder /app/dist /usr/share/nginx/html

COPY --from=builder /app/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
