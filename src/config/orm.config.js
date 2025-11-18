import dotenv from "dotenv";
dotenv.config();

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
    process.env.SEQUELIZE_DATABASE,
    process.env.SEQUELIZE_USERNAME,
    process.env.SEQUELIZE_PASSWORD,
    {
        host: process.env.SEQUELIZE_HOST,
        dialect: process.env.SEQUELIZE_DIALECT
    }
)

try {
    await sequelize.authenticate();
    console.log("Database has been connected sucessfully.");
} catch (err) {
    console.log("Something went wrong with the connection.");
    console.log(err);
}

export default sequelize;