FROM node:24-bullseye-slim

RUN apt-get update && apt-get install -y --no-install-recommends dumb-init

WORKDIR /usr/src/app
## give permissions to dir for node user
RUN chown -R node:node /usr/src/app

USER node
COPY --chown=node:node . .

RUN npm ci

ENTRYPOINT ["/usr/bin/dumb-init", "--"]
CMD ["dumb-init", "node", "./bin/www"]
