import { User } from "../models/User.model.js";

export class UserRepository {
    register = async (data) => {
        return await User.create(data);
    }

    getByEmail = async (email) => {
        return await User.findOne({where: {email: email}});
    }
}