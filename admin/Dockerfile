ARG NODE_VERSION=13

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/admin

COPY package.json yarn.lock ./
RUN set -eux; \
	yarn install

COPY . ./

VOLUME /usr/src/admin/node_modules
EXPOSE 3000

CMD ["yarn", "start"]
