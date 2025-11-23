import crypto from "crypto";
import util from "util";

import { ErrorInPassHash } from "../errors/ErrorInPassHash.js";

const pbkdf2Async = util.promisify(crypto.pbkdf2);

export const getHashedPassword = async (pssw, salt) => {
    try {
        const dkey = await pbkdf2Async(pssw, salt, 10000, 64, "sha512");
        return dkey.toString("base64");
    } catch (err) {
        throw new ErrorInPassHash("Erro during the hashing process of the password: " + err.message);
    }
}