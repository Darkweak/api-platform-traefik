# https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# https://docs.docker.com/compose/compose-file/#target
ARG NODE_VERSION=13

# "development" stage
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/client

RUN yarn global add @api-platform/client-generator

# prevent the reinstallation of node modules at every changes in the source code
COPY package.json yarn.lock ./
RUN set -eux; \
	yarn install

COPY . ./

VOLUME /usr/src/client/node_modules
EXPOSE 3000
RUN yarn
RUN yarn add typescript

CMD ["yarn", "start"]
