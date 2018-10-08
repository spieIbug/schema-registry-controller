FROM nginx:alpine

COPY docker/nginx/nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
COPY dist/schema-registry-controller .
