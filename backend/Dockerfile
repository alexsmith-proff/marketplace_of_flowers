FROM node:14.15.1
WORKDIR /usr/src/app 
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000