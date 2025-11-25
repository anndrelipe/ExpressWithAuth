import dotenv from "dotenv"
dotenv.config();

import jwt from "jsonwebtoken"

import { ForbidenError } from "../errors/ForbidenError.js";

export const authHandle = (err, req, res, next) => {
    const authHeader = req.headers["authorization"];

    if (!authHeader) {
        next(new ForbidenError("Forbiden error... No token was found."));
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        next(new ForbidenError("Forbiden error... Invalid token."));
    }

    jwt.verify(token, process.env.USER_SECRET, (err, data) => {
        if (err) {
            next(new ForbidenError("Forbiden error... Invalid token."));
        }
        req.user = data;
        next();
    });
}
