FROM node:current-alpine3.20 AS base

FROM base AS dependencies

WORKDIR /deps

COPY package.json ./

RUN npm i --omit=dev

FROM base AS build

WORKDIR /build

COPY . .

RUN npm i

RUN npm run build

RUN

FROM base AS runtime

WORKDIR /app

COPY --from=dependencies /deps/node_modules ./node_modules
COPY --from=build /build/dist ./dist

EXPOSE 80

RUN npm i -g vite

CMD ["vite", "--host", "0.0.0.0", "--port", "80", "preview"]
