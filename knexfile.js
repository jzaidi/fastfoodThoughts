var environment = process.env.DATABASE_URL || "development";
var config = require("../knexfile.js")[environment];
module.exports = require("knex")(config);
;
let connectionString = process.platform === 'win32' ? 'postgres://postgres:root@localhost/fastfoodThoughts' : 'postgres://localhost/fastfoodThoughts'

module.exports = {
  development: {
    client: "pg",
    connection: connectionString,
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds"
    }
  },
  production: {
    client: "pg",
    connection:
      process.env.DATABASE_URL ||
      "postgres://kukkehfsidvpaq:8f0bc4768252783128b3c5e1a608eba00bfcba65e795f3208ee6c75d2ebd1d6d@ec2-23-21-238-28.compute-1.amazonaws.com:5432/d2eijfb4ustk1o",
    migrations: {
      directory: __dirname + "/db/migrations"
    },
    seeds: {
      directory: __dirname + "/db/seeds/production"
    }
  }
};
