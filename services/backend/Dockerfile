FROM node:alpine

RUN npm install -g typescript

USER node

WORKDIR /home/node/backend

COPY --chown=node:node package.json .

RUN npm install

COPY --chown=node:node . .

EXPOSE 5050

RUN npm run build

CMD ["npm", "run", "start"]