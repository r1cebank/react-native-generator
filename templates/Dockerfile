############################################################
# Dockerfile to run React Native Boilerplate
# Based on react-native
############################################################

FROM r1cebank/react-native:latest

# File Author / Maintainer
MAINTAINER Siyuan Gao <siyuangao@gmail.com>

# copy all the files into /app
COPY . /app

WORKDIR /app

env PATH node_modules/.bin:$PATH

# Expose ports
EXPOSE 8080
EXPOSE 8082

RUN npm install
