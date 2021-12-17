# FROM node:14

# # RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

# WORKDIR /root/dev/PBL6

# COPY package.json ./

# RUN npm install

# COPY . .

# CMD [ "node", "src/index.js" ]


FROM node:alpine

# RUN mkdir -p /usr/src/app
WORKDIR /root/dev/PBL6

COPY package.json ./
RUN npm install
COPY . .
ENV PORT 5000
ARG DOCKER_ENV
ENV NODE_ENV=${DOCKER_ENV}
RUN if [ "$DOCKER_ENV" = "production" ] ; then  echo   your NODE_ENV for stage is $NODE_ENV;  \
    else  echo your NODE_ENV for dev is $NODE_ENV; \
    fi 


EXPOSE ${PORT}

CMD [ "npm","run", "start" ]