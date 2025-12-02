import { ForbidenError } from "../errors/ForbidenError.js"

export const adminAuthHandle = async (req, res, next) => {
    if (!(req.user.role == "3")) {
        next(new ForbidenError("That User do not have permission to access this route"));
    }
    next();
}