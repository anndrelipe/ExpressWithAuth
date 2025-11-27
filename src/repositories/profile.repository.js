import { Profile } from "../models/Profile.model.js"

export class ProfileRepository {
    createProfile = async (data) => {
        return await Profile.create(data);
    }

    getProfileByName = async (name) => {
        return await Profile.findOne({
            where: {
                name: name
            }
        });
    }

    getProfile = async (id) => {
        return await Profile.findByPk(id);
    }

    getAllProfiles = async (id) => {
        return await Profile.findAll();
    }

    updateProfileByUID = async (id, data) => {
        return await Profile.update(data, {
            where: {
                userId: id
            }
        });
    }

    deleteProfileByUID = async (id) => {
        return await Profile.destroy({
            where: {
                userId: id
            }
        });
    }

    updateProfile = async (id, data) => {
        return await Profile.update(data, {
            where: {
                id: id
            }
        });
    }

    deleteProfile = async (id) => {
        return await Profile.destroy({
            where: {
                id: id
            }
        });
    }
}