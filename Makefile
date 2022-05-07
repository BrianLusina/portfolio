OSFLAG 				:=
ifeq ($(OS),Windows_NT)
	OSFLAG += -D WIN32
	ifeq ($(PROCESSOR_ARCHITECTURE),AMD64)
		OSFLAG += -D AMD64
	endif
	ifeq ($(PROCESSOR_ARCHITECTURE),x86)
		OSFLAG += -D IA32
	endif
else
	UNAME_S := $(shell uname -s)
	ifeq ($(UNAME_S),Linux)
		OSFLAG += -D LINUX
	endif
	ifeq ($(UNAME_S),Darwin)
		OSFLAG += -D OSX
	endif
		UNAME_P := $(shell uname -p)
	ifeq ($(UNAME_P),x86_64)
		OSFLAG += -D AMD64
	endif
		ifneq ($(filter %86,$(UNAME_P)),)
	OSFLAG += -D IA32
		endif
	ifneq ($(filter arm%,$(UNAME_P)),)
		OSFLAG += -D ARM
	endif
endif

echoos:
	@echo $(OSFLAG)

setup-trivy:
	curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b ./bin v0.16.0

install:
	yarn install

start:
	yarn start

test:
	yarn test

test-cover:
	yarn test:coverage

scan-frontend:
	yarn audit --audit-level=critical

scan-licenses:
	yarn scan:licenses

scan-docker-image:
	@echo "Scanning Docker Image: $(IMAGE)"
	./bin/trivy $(IMAGE)

# See local hadolint install instructions: https://github.com/hadolint/hadolint
# This is linter for Dockerfiles
lint-docker:
	docker run --rm -i hadolint/hadolint < Dockerfile

lint:
	yarn lint

lint-styles:
	yarn lint:styles

lint-fix:
	yarn lint:fix

setup-env:
	./scripts/bash/env.sh

build:
	yarn build

build-docker:
	./scripts/docker/build_docker.sh

push-docker:
	./scripts/docker/push_docker.sh

# Validates codecov yml
validate-codecov:
	curl --data-binary @codecov.yml https://codecov.io/validate

all: install lint lint-docker test