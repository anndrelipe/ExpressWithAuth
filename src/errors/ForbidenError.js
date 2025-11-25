import { AppError } from "./AppError.js" 

export class ForbidenError extends AppError {
    constructor (message) {
        super(message, 403);
    }
}