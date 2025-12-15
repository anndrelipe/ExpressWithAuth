import crypto from "crypto";

export const getConfirmationToken = () => {
    const arr = new Uint32Array(10);
    crypto.getRandomValues(arr);

    const str = arr.join("");

    return crypto.hash('sha512', str, 'hex');
}