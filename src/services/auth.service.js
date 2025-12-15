import {NotFoundError} from "../errors/NotFoundError.js"

export class AuthService {
    constructor (userRepository) {
        this.userRepository = userRepository;
    }

    confirmAccount = async (token, email) => {
        const user = await this.userRepository.getByEmail(email);
        
        if (!user) {
            throw new NotFoundError("Sorry, It was not possible to find an user registered with " + email);
        }

    }
}