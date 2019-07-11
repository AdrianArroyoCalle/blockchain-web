FROM node:10

WORKDIR /opt/blockchain-web

COPY . .

RUN npm install

RUN npm install -g @angular/cli@7.3.9

CMD ["ng","build","--prod"]
