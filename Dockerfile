FROM node:current-alpine3.12

WORKDIR /app

RUN npm i -g serve

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

CMD [ "serve", "-s", "build" ]