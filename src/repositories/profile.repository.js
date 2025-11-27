import { Profile } from "../models/Profile.model.js"

export class ProfileRepository {
    createProfile = async (data) => {
        return await Profile.create(data);
    }

    getProfile = async (name) => {
        return await Profile.findOne({
            where: {
                name: name
            }
        });
    }

    updateProfile = async (userId, data) => {
        return await Profile.update(data, {
            where: {
                id: userId
            }
        });
    }

    deleteProfile = async (userId) => {
        return await Profile.destroy({
            where: {
                id: userId
            }
        });
    }
}