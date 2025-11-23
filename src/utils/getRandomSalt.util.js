import crypto from "crypto";

export const getRandomSalt = async () => {
    return crypto.randomBytes(16).toString("base64");
}

