import express from "express"
import sequelize from "../config/orm.config.js";
import { setupAssociations } from "../config/setupAssociations.js";

import "../models/Role.model.js";
import "../models/User.model.js";

setupAssociations();

const app = express();
app.use(express.json());

try {
    await sequelize.sync();
    console.log("All tables are synchronized.");
} catch (err) {
    console.error("Sync error:", err.message);
}

export default app;