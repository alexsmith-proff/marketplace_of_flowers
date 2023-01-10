FROM node:14.15.1
WORKDIR /usr/src/app 
COPY package.json .
RUN npm install
COPY . .
COPY ./server_images ./dist/static
EXPOSE 5000