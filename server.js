import dotenv from "dotenv";
dotenv.config();

import app from "./src/app/index.js";

const PORT = process.env.DEV_SERVER_PORT || 3000;
const HOST = process.env.DEV_SERVER_HOST || "localhost";

app.get("/", (req, res) => {
    res.status(200).json({
        "status": "Okay :)",
        "message": "API under development."
    });
});

app.listen(PORT, HOST, () => {
    console.log(`Server listening at http://${HOST}:${PORT}.`);
});