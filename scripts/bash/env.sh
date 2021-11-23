#!/bin/bash

# chec if .env file exists
if [[ -f ".env" ]]; then
    echo "Environment file exists. Skipping Environment file creation"
    echo "Build will use environment variables from .env file"
else 
    echo "Environment file not available"
    echo "Creating .env file"

    touch .env

    echo "Env file created. Populating with provided env variables"

    # check the branch of the running build to know which API_URL to use

    if [[ "$CIRCLE_BRANCH" == "develop" ]]; then
        echo "Running on ${CIRCLE_BRANCH}. using STAGING_API_URL"
        export API_URL=${STAGING_API_URL}
        export ENV=${STAGING_ENV}
    elif [[ "$CIRCLE_BRANCH" == "master" || "$CIRCLE_BRANCH" == "main" || "$CIRCLE_BRANCH" == "production" ]]; then
        echo "Running on ${CIRCLE_BRANCH}. using PRODUCTION_API_URL"
        export API_URL=${PRODUCTION_API_URL}
        export ENV=${PRODUCTION_ENV}
    else
        echo "Running on ${CIRCLE_BRANCH}. using DEVELOPMENT_API_URL"
        # if branch is not develop/development or master, then use DEVELOPMENT_API_URL
        export API_URL=${DEVELOPMENT_API_URL}
        export ENV=${DEVELOPMENT_ENV}
    fi
   
    echo NODE_ENV=${ENV} >> .env
    echo ENV=${ENV} >> .env
    echo API_URL=${API_URL} >> .env
    echo API_KEY=${API_KEY} >> .env
    echo AUTH_DOMAIN=${AUTH_DOMAIN} >> .env
    echo PROJECT_ID=${PROJECT_ID} >> .env
    echo STORAGE_BUCKET=${STORAGE_BUCKET} >> .env
    echo MESSAGING_SENDER_ID=${MESSAGING_SENDER_ID} >> .env
    echo APP_ID=${APP_ID} >> .env
    echo MEASUREMENT_ID=${MEASUREMENT_ID} >> .env
    echo SENTRY_DSN=${SENTRY_DSN} >> .env

    echo "Env file populated..."
fi