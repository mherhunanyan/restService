FROM node
WORKDIR /docApp
COPY . /docApp
RUN npm install
ENTRYPOINT [ "npm", "start" ]