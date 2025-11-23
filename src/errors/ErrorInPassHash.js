import { AppError } from "./AppError.js";

export class ErrorInPassHash extends AppError {
    constructor(message) {
        super(message, 500);
    }
}