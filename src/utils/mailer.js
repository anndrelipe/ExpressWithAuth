import dotenv from "dotenv";
dotenv.config();

import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.DEV_HOST,
    port: process.env.DEV_PORT,
    auth: {
        user: process.env.DEV_AUTH_USER,
        pass: process.env.DEV_AUTH_PASS
    }
});

export const sendEmail = async ({ to, subject, html }) => {
    const info = await transporter.sendMail({
        from: "ExpressWithAuth <no-reply@teste.com>",
        to: to,
        subject: subject,
        html: html
    });

    return info.messageId;
}