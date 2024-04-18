FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

CMD ["npm", "start"]

LABEL Name="auth-service"
LABEL Version="1.0"