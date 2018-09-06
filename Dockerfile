FROM node:9.11 as builder

WORKDIR /home/tobias_karzewski/profile

COPY package.json package-lock.json tsconfig.json tslint.json ./

# RUN npm install

RUN cp profile/README.md profile/README-TEST.md
