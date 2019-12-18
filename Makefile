.PHONY: build cache composer-install composer-update help install migration-create migration-diff repopulate-db up update

CONFIG_DIR=api/config
DC=docker-compose
DC_UP=$(DC) up -d
DC_EXEC=$(DC) exec php
BIN_CONSOLE=$(DC_EXEC) bin/console

help:
	@grep -E '(^[0-9a-zA-Z_-]+:.*?##.*$$)|(^##)' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[32m%-25s\033[0m %s\n", $$1, $$2}' | sed -e 's/\[32m##/[33m/'

build: ## Build
	$(DC) build
	$(DC_UP)

cache: ## Clear cache
	$(BIN_CONSOLE) cache:clear

composer-install: ## Install composer packages
	$(DC_EXEC) composer install

composer-update: ## Update composer
	$(DC_EXEC) composer update

create-db: ## Create database
	$(BIN_CONSOLE) doctrine:database:create

deploy: up-prod build update install cache up ## Deploy command

drop-db: ## Drop database
	$(DC_UP)
	$(BIN_CONSOLE) doctrine:database:drop --force

install: composer-install migration-migrate ## Install and setup project

jwt: ## Generate JWT
	mkdir -p $(CONFIG_DIR)/jwt
	echo "$(jwt)" | openssl genpkey -out $(CONFIG_DIR)/jwt/private.pem -pass stdin -aes256 -algorithm rsa -pkeyopt rsa_keygen_bits:4096
	echo "$(jwt)" | openssl pkey -in $(CONFIG_DIR)/jwt/private.pem -passin stdin -out $(CONFIG_DIR)/jwt/public.pem -pubout
	chmod 777 $(CONFIG_DIR)/jwt/*

migration-down: ## Remove migration
	$(BIN_CONSOLE) doctrine:migrations:execute --down $(migration)

migration-diff: ## Make the diff
	$(BIN_CONSOLE) doctrine:migrations:diff

migration-generate: ## Create new migration
	$(BIN_CONSOLE) doctrine:migrations:generate

migration-migrate: ## Execute unlisted migrations
	$(BIN_CONSOLE) doctrine:migrations:migrate

reset-db: drop-db create-db migration-migrate ## Reset database

up: ## Start containers
	$(DC_UP)

up-dev: ## Start containers dev
	cp .env.dev .env
	cp docker-compose.yml.dev docker-compose.yml
	$(MAKE) up

up-prod: ## Start containers prod
	cp .env.prod .env
	cp docker-compose.yml.prod docker-compose.yml
	$(MAKE) up

update: ## Update containers composer packages then re-up containers
	$(DC) pull
	$(MAKE) composer-update
	$(MAKE) up
