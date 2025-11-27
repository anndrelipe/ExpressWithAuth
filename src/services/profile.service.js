export class ProfileService {
    constructor (profileRepository) {
        this.profileRepository = profileRepository;
    }

    createProfile = async (data) => {
        return await this.profileRepository.createProfile(data);
    }

    getProfile = async (id) => {
        return await this.profileRepository.getProfile(id);
    }

    updateProfile = async (id, data) => {
        return await this.profileRepository.updateProfile(id, data);
    }

    deleteProfile = async (id) => {
        return await this.profileRepository.deleteProfile(id);
    }
}