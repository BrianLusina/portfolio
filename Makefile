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
	@echo "Setting up trivy for application"
	curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b ./bin v0.16.0
	@echo "Done setting up trivy for application"

install:
	@echo "Installing application"
	bun run install
	@echo "Done with installing application"

start:
	@echo "Starting application"
	bun run start

test:
	@echo "Testing application"
	bun run test
	@echo "Done with testing application"

test-cover:
	@echo "Running test coverage"
	bun run test:coverage
	@echo "Done with test coverage"

scan-frontend:
	@echo "Scanning Docker Image: $(IMAGE)"
	bun run audit --audit-level=critical
	@echo "Done with scanning Docker Image: $(IMAGE)"

scan-licenses:
	@echo "Scanning licenses"
	bun run scan:licenses
	@echo "Done with scanning licenses"

scan-docker-image:
	@echo "Scanning Docker Image: $(IMAGE)"
	./bin/trivy $(IMAGE)
	@echo "Done with scanning docker Image: $(IMAGE)"

# See local hadolint install instructions: https://github.com/hadolint/hadolint
# This is linter for Dockerfiles
lint-docker:
	@echo "Linting Docker Image: $(IMAGE)"
	docker run --rm -i hadolint/hadolint < Dockerfile
	@echo "Done with linting docker $(IMAGE)"

lint:
	@echo "Run linting"
	bun run lint
	@echo "Done linting"

lint-styles:
	@echo "Linting styles"
	bun run lint:styles
	@echo "Done with linting styles"

lint-fix:
	@echo "Run lint fix"
	bun run lint:fix
	@echo "Done with fixing linting"

setup-env:
	@echo "Setting up env for application"
	./scripts/bash/env.sh
	@echo "Done setting up env for application"

build:
	@echo "Building application"
	bun run build
	@echo "Done with building application"

build-docker:
	@echo "Building docker image for application"
	./scripts/docker/build_docker.sh
	@echo "Done building docker image for application"

push-docker:
	@echo "Pushing Docker image for application"
	./scripts/docker/push_docker.sh
	@echo "Done pushing Docker image for application"

# Validates codecov yml
validate-codecov:
	@echo "Validating codecov configuration"
	curl --data-binary @codecov.yml https://codecov.io/validate
	@echo "Done validating codecov configuration"

all: install lint lint-docker test
