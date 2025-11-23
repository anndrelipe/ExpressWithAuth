export class UserController {
    constructor (userService) {
        this.userService = userService;
    }

    register = async ( req, res, next ) => {
        const data = req.body;
        try {
            const user = await this.userService.register(data);
            return res.status(201).json({
                "message": "top menino, agora se loga pra testar",
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
            return res.status(201).json({
                "message": "raleu meu fi",
                "content": loggedIn
            });
        } catch (err) {
            next(err);
        }
    }

}