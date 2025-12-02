import dotenv from "dotenv"
dotenv.config();

import { User } from "../models/User.model.js";

import { getHashedPassword } from "../utils/getHashedPassword.util.js";
import { getRandomSalt } from "../utils/getRandomSalt.util.js";

const adminSeed = async () => {
    const admin = await User.findOne({
        where: 
            {email: "admin@gmail.com"}
    });

    if (!admin) {

        const salt = await getRandomSalt();
        const password = await getHashedPassword(process.env.ADMIN_PASSWORD, salt);

        await User.create({
            email: process.env.ADMIN_EMAIL,
            password: password,
            salt: salt,
            roleId: 3
        });

        console.log("ADMIN Has just been created.");
        return;
    }

    console.log("ADMIN already exists");
    return;
}

adminSeed();