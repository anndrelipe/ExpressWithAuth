import { AppError } from "../errors/AppError.js"

export const errorHandle = async (err, req, res, next) => {
    console.log(err);
    
    if (err instanceof AppError) {
        return res.status(err.status).json({
            "error": err.name,
            "details": err.message
        });
    }

    return res.status(500).json({
        "error": "Internal Server Error",
        "details": "Something went wrong..."
    })
}