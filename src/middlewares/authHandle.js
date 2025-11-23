import dotenv from "dotenv"
dotenv.config();

import jwt from "jsonwebtoken"

export const authHandle = (err, req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(' ')[1]

    if (!token) {
        
    }

    jwt.verify(token, process.env.ADMIN_SECRET, (err, data) => {
        if (err) {

        }
        req.user = data;
        next();
    });
}
