FROM node:20-alpine

WORKDIR /app

COPY . .

RUN npm i 

EXPOSE 8000

CMD ["node", "index.js"]
