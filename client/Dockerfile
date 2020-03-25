ARG NODE_VERSION=13

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/client

RUN yarn global add @api-platform/client-generator

COPY package.json yarn.lock ./
RUN set -eux; \
	yarn install

COPY . ./

VOLUME /usr/src/client/node_modules
EXPOSE 3000
RUN yarn
RUN yarn add typescript

CMD ["yarn", "start"]
