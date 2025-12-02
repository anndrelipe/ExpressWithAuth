import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken"

export const getToken = async (id, status, roleId) => {
    return jwt.sign({ 
        id: id, 
        status: status, 
        roleId: roleId 
    }, process.env.JWT_SECRET, { expiresIn: "1h" });
}