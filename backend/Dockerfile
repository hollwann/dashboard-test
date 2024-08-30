FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x wait-for-it.sh start.sh

# Wait for the database to be ready, then run migrations and seeds
CMD ["./wait-for-it.sh", "db:5432", "--", "./start.sh"]

EXPOSE 5001