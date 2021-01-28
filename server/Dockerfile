FROM node:14

WORKDIR /source
COPY . .

RUN npm install
RUN npm install -g nodemon
RUN echo "hello"
CMD ["nodemon", "-L", "app.js"]
