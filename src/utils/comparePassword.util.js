import { getHashedPassword } from "./getHashedPassword.util.js";

export const comparePassword = async (psswFromDb, saltFromDb, literalPssw) => {
    var pssw;

    try {
        pssw = await getHashedPassword(literalPssw, saltFromDb);
    } catch (err) {
        throw err;
    }

    return (pssw == psswFromDb);
}