FROM node:16-alpine3.15 as builder

WORKDIR /app

RUN apk add --no-cache \
    bash \
    lcms2-dev \
    libpng-dev \
    gcc \
    g++ \
    make \
    autoconf \
    automake \
  && rm -rf /var/cache/apk/*

COPY . .

RUN yarn install && yarn build

FROM node:16-alpine3.15

ENV PM2_HOME /usr/src/app/.pm2

WORKDIR /usr/src/app

RUN mkdir /usr/src/app/.pm2 && chmod -R 777 /usr/src/app && chmod -R 777 /usr/src/app/.pm2

COPY --from=builder app/build build
COPY --from=builder app/server .

RUN yarn install --quiet --no-optional && yarn add pm2@5.2.0 -g

EXPOSE 8080
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--only", "folio-client"]