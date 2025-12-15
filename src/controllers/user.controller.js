import { sendEmail } from "../utils/mailer.js";

export class UserController {
    constructor (userService) {
        this.userService = userService;
    }

    register = async ( req, res, next ) => {
        const data = req.body;
        try {
            const user = await this.userService.register(data);
            const info = await sendEmail({
                
            });

            console.log(info);
            return res.status(201).json({
                "message": "Registered successfuly.",
                "content": user
            });
        } catch (err) {
            next(err);
        }
    }

    login = async ( req, res, next ) => {
        const data = req.body;
        try {
            const loggedIn = await this.userService.login(data);
            return res.status(200).json({
                "message": `Welcome`,
                "content": loggedIn 
            });
        } catch (err) {
            next(err);
        }
    }

    getOwnUser = async ( req, res, next ) => {
        const id = req.user.id;
        try {
            const user = await this.userService.getUser(id);
            return res.status(200).json({
                "message": "User successfuly found",
                "content": user
            });
        } catch (err) {
            next(err);
        }
    }

    updateOwnUser = async ( req, res, next ) => {
        const data = req.body;
        const id = req.user.id;

        try {
            const [rowsUpdated, profileUpdated] = await this.userService.updateUser(data, id);
            return res.status(200).json({
                "message": "User successfuly updated",
                "content": profileUpdated
            });
        } catch (err) {
            next(err);
        }
    }

    deleteOwnUser = async ( req, res, next ) => {
        const id = req.user.id;

        try {
            await this.userService.deleteUser(id);
            return res.status(200).json({
                "message": "User successfuly deleted",
                "content": []
            });
        } catch (err) {
            next(err);
        }
    }

    getRemoteUserById = async ( req, res, next ) => {
        const id = req.params.id;
        try {
            const user = await this.userService.getUser(id);
            return res.status(200).json({
                "message": "User successfuly found",
                "content": user
            });
        } catch (err) {
            next(err);
        }
    }

    updateRemoteUser = async ( req, res, next ) => {
        const id = req.params.id;
        const data = req.body;
        try {
            const [rowsUpdated, profileUpdated] = await this.userService.updateUser(data, id);
            return res.status(200).json({
                "message": "User successfuly updated",
                "content": profileUpdated
            });
        } catch (err) {
            next(err);
        }
    }

    deleteRemoteUser = async ( req, res, next ) => {
        const id = req.params.id;
        try {
            await this.userService.deleteUser(id);
            return res.status(200).json({
                "message": "User successfuly deleted",
                "content": []
            });
        } catch (err) {
            next(err);
        }
    }
}