const { Sequelize } = require("sequelize");
require("dotenv").config();

const DBName = process.env.DB_NAME;
const DBUser = process.env.DB_USERNAME;

const DBPassword = process.env.DB_PASSWORD;

const sequelize = new Sequelize(DBName, DBUser, DBPassword, {
  host: "localhost",
  dialect: "mysql",
});
const dbConnect = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.log("Unable to connect to the database", error);
  }
};

module.exports = { sequelize, dbConnect };
