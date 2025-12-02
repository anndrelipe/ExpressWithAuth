import dotenv from "dotenv";
dotenv.config();

import { getRandomSalt } from "../utils/getRandomSalt.util.js";
import { getHashedPassword } from "../utils/getHashedPassword.util.js";
import { comparePassword } from "../utils/comparePassword.util.js";
import { NotFoundError } from "../errors/NotFoundError.js";
import { getToken } from "../utils/getToken.js";

export class UserService {
    constructor (userRepository) {
        this.userRepository = userRepository;
    }

    register = async (data) => {
        const { name, email, password } = data;
        const salt = await getRandomSalt();
        const hashedPassword = await getHashedPassword(password, salt);

        const user = {
            "email": email,
            "password": hashedPassword,
            "salt": salt,
            "roleId": 1
        }

        return await this.userRepository.register(user);
    }

    login = async (data) => {
        const { email, password } = data;
        const user = await this.userRepository.getByEmail(email) ?? {};
        const validation = await comparePassword(user.password, user.salt, password) ?? false;

        if (!user || !validation) {
            throw new NotFoundError("Something went wrong... The credentials provided do not match any existing user.");
        }

        const token = await getToken(user.id, user.status, user.roleId);
        
        // precisa validar?

        return {
            token: token
        }
    }
}