FROM node:24-bullseye-slim


WORKDIR /usr/src/app
## give permissions to dir for node user
RUN chown -R node:node /usr/src/app

USER node
COPY --chown=node:node . .

RUN npm install

CMD ["npm", "run", "dev"]
