FROM node:alpine

WORKDIR linkshortener

COPY package.json .
RUN npm install

COPY app app
CMD ["npm","start"]