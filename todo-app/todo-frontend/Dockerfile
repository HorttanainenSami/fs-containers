# Build
From node:24 As build-stage

WORKDIR /usr/src/app

COPY . .

RUN npm ci

ARG VITE_BACKEND_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build


# Test
From build-stage AS test-stage
RUN npm test



# Image
FROM nginx:1.20-alpine

COPY --from=build-stage /usr/src/app/dist /usr/share/nginx/html