# Adonis API application

This is the boilerplate for creating an API server in AdonisJs, it comes pre-configured with.

1. Bodyparser
2. Authentication
3. CORS
4. Lucid ORM
5. Migrations and seeds

## Setup

Use the adonis command to install the blueprint

```bash
adonis new yardstick --api-only
```

or manually clone the repo and then run `npm install`.


Create a database and setup .env file using .env.example as an example.

Your .env file should look something like this. (Don't commit your .env files!)

```dosini
# .env
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_NAME=AdonisJs
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=YOUR_APP_KEY
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=YOUR_USER
DB_PASSWORD=YOUR_PASSWORD
DB_DATABASE=YOUR_DB_NAME
HASH_DRIVER=bcrypt
```


### Migrations

Run the following command to run startup migrations.

```js
adonis migration:run
```
