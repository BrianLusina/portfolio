#!/bin/bash

# Recreate config file
rm -rf ./env-config.js
touch ./env-config.js

echo "---Creating env-config.js file for dynamic environment variables---"

ENV_FILE=.env

# only if there is no .env file, do we use the .env.example file provided as a template
if [ -f $ENV_FILE ]; then
  echo "env file $ENV_FILE exists."
else
  echo "env file $ENV_FILE does not exist. Using provided defaults"
  cp .env.sample $ENV_FILE

  if [ -z "${GITHUB_GRAPHQL_API_URL}" ]; then
    echo "Missing GITHUB_GRAPHQL_API_URL Env"
  else
    echo GITHUB_GRAPHQL_API_URL="$GITHUB_GRAPHQL_API_URL" >> "$ENV_FILE"
  fi

  if [ -z "${GITHUB_REST_API_URL}" ]; then
    echo "Missing GITHUB_REST_API_URL Env"
  else
    echo GITHUB_REST_API_URL="$GITHUB_REST_API_URL" >> "$ENV_FILE"
  fi

  if [ -z "${GITHUB_TOKEN}" ]; then
    echo "Missing GITHUB_TOKEN  Env"
  else
    echo GITHUB_TOKEN="$GITHUB_TOKEN" >> "$ENV_FILE"
  fi

  if [ -z "${SENTRY_DSN}" ]; then
    echo "Missing Sentry DSN"
  else
    echo SENTRY_DSN="$SENTRY_DSN" >> "$ENV_FILE"
  fi

  if [ -z "${ENV}" ]; then
    echo "Missing ENV key"
  else
    echo ENV="$ENV" >> "$ENV_FILE"
  fi

  if [ -z "${FIREBASE_API_KEY}" ]; then
    echo "Missing FIREBASE_API_KEY key"
  else
    echo FIREBASE_API_KEY="$FIREBASE_API_KEY" >> "$ENV_FILE"
  fi

  if [ -z "${FIREBASE_AUTH_DOMAIN}" ]; then
    echo "Missing FIREBASE_AUTH_DOMAIN key"
  else
    echo FIREBASE_AUTH_DOMAIN="$FIREBASE_AUTH_DOMAIN" >> "$ENV_FILE"
  fi

  if [ -z "${FIREBASE_PROJECT_ID}" ]; then
    echo "Missing FIREBASE_PROJECT_ID key"
  else
    echo FIREBASE_PROJECT_ID="$FIREBASE_PROJECT_ID" >> "$ENV_FILE"
  fi

  if [ -z "${FIREBASE_STORAGE_BUCKET}" ]; then
    echo "Missing FIREBASE_STORAGE_BUCKET key"
  else
    echo FIREBASE_STORAGE_BUCKET="$FIREBASE_STORAGE_BUCKET" >> "$ENV_FILE"
  fi

  if [ -z "${FIREBASE_MESSAGING_SENDER_ID}" ]; then
    echo "Missing FIREBASE_MESSAGING_SENDER_ID key"
  else
    echo FIREBASE_MESSAGING_SENDER_ID="$FIREBASE_MESSAGING_SENDER_ID" >> "$ENV_FILE"
  fi

  if [ -z "${FIREBASE_APP_ID}" ]; then
    echo "Missing FIREBASE_APP_ID key"
  else
    echo FIREBASE_APP_ID="$FIREBASE_APP_ID" >> "$ENV_FILE"
  fi

  if [ -z "${FIREBASE_MEASUREMENT_ID}" ]; then
    echo "Missing FIREBASE_MEASUREMENT_ID key"
  else
    echo FIREBASE_MEASUREMENT_ID="$FIREBASE_MEASUREMENT_ID" >> "$ENV_FILE"
  fi

  if [ -z "${BUGSNAG_API_KEY}" ]; then
    echo "Missing BUGSNAG_API_KEY key"
  else
    echo BUGSNAG_API_KEY="$BUGSNAG_API_KEY" >> "$ENV_FILE"
  fi

  if [-z "${EMAILJS_BASE_URL}"]; then
    echo "Missing EMAILJS_BASE_URL key"
  else
    echo EMAILJS_BASE_URL="$EMAILJS_BASE_URL" >> "$ENV_FILE"
  fi

  if [-z "${EMAILJS_SERVICE_ID}"]; then
    echo "Missing EMAILJS_SERVICE_ID key"
  else
    echo EMAILJS_SERVICE_ID="$EMAILJS_SERVICE_ID" >> "$ENV_FILE"
  fi

  if [-z "${EMAILJS_TEMPLATE_ID}"]; then
    echo "Missing EMAILJS_TEMPLATE_ID key"
  else
    echo EMAILJS_TEMPLATE_ID="$EMAILJS_TEMPLATE_ID" >> "$ENV_FILE"
  fi

  if [-z "${EMAILJS_USER_ID}"]; then
    echo "Missing EMAILJS_USER_ID key"
  else
    echo EMAILJS_USER_ID="$EMAILJS_USER_ID" >> "$ENV_FILE"
  fi

  if [-z "${EMAILJS_ACCESS_TOKEN}"]; then
    echo "Missing EMAILJS_ACCESS_TOKEN key"
  else
    echo EMAILJS_ACCESS_TOKEN="$EMAILJS_ACCESS_TOKEN" >> "$ENV_FILE"
  fi
fi

# Add assignment
echo "window._env_ = {" >> ./env-config.js

# Read each line in .env file
# Each line represents key=value pairs
while read -r line || [[ -n "$line" ]];
do
  # Split env variables by character `=`
  if printf '%s\n' "$line" | grep -q -e '='; then
    varname=$(printf '%s\n' "$line" | sed -e 's/=.*//')
    varvalue=$(printf '%s\n' "$line" | sed -e 's/^[^=]*=//')
  fi

  # Read value of current variable if exists as Environment variable
  value=$(printf '%s\n' "${!varname}")
  # Otherwise use value from .env file
  [[ -z $value ]] && value=${varvalue}

  # Append configuration property to JS file
  echo "  $varname: \"$value\"," >> ./env-config.js
done < $ENV_FILE

echo "}" >> ./env-config.js

echo "---Done---"

# Alternatively the below script can also be used to perform above function

##!/bin/sh

## line endings must be \n, not \r\n !

#echo "---Creating env-config.js file for dynamic environment variables---"

#ENV_FILE=.env
#
## only if there is no .env file, do we use the .env.example file provided as a template
#if [ -f $ENV_FILE ]; then
#  echo "env file $ENV_FILE exists."
#else
#  echo "env file $ENV_FILE does not exist. Using provided default"
#  cp .env.example $ENV_FILE
#fi

#echo "window._env_ = {" > ./env-config.js
#awk -F '=' '{ print $1 ": \"" (ENVIRON[$1] ? ENVIRON[$1] : $2) "\"," }' ./$ENV_FILE >> ./env-config.js
#echo "}" >> ./env-config.js

#echo "---Done---"