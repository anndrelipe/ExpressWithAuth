import { User } from "../models/User.model.js";

export class UserRepository {
    register = async (data) => {
        return await User.create(data);
    }

    getByEmail = async (email) => {
        return await User.findOne({where: {email: email}});
    }

    getUser = async (id) => {
        return await User.findOne({where: {id: id}});
    }

    updateUser = async (data, id) => {
        return await User.update(data, {where: {id: id}});
    }

    deleteUser = async (id) => {
        return await User.destroy({where: {id: id}});
    }
}