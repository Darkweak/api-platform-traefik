# https://docs.docker.com/develop/develop-images/multistage-build/#stop-at-a-specific-build-stage
# https://docs.docker.com/compose/compose-file/#target
ARG NODE_VERSION=13

# "development" stage
FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/admin

# prevent the reinstallation of node modules at every changes in the source code
COPY package.json yarn.lock ./
RUN set -eux; \
	apk add --no-cache --virtual .gyp \
		g++ \
		make \
		python \
	; \
	yarn install; \
	apk del .gyp

COPY . ./

VOLUME /usr/src/admin/node_modules
EXPOSE 3000

CMD ["yarn", "start"]
