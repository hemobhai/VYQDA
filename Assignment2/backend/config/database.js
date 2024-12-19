import { Sequelize } from "sequelize";
import { configDotenv } from "dotenv";

configDotenv();

const database = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  username: process.env.DB_USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  define: {
    timestamps: false,
  },
  logging: false,
  timezone: "+05:30",
});

export default database;
