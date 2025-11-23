import express from "express"
import sequelize from "../config/orm.config.js";
import { setupAssociations } from "../config/setupAssociations.js";
import router from "../routes/index.js";

import { errorHandle } from "../middlewares/errorHandle.js";

setupAssociations();

const app = express();
app.use(express.json());

app.use("/api", router);
app.use(errorHandle);

try {
    await sequelize.sync({ alter: true });
    console.log("All tables are synchronized.");
} catch (err) {
    console.error("Sync error:", err.message);
}

export default app;