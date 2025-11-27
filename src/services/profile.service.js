export class ProfileService {
    constructor (profileRepository) {
        this.profileRepository = profileRepository;
    }

    createProfile = async (data) => {
        return await this.profileRepository.createProfile(data);
    }

    getProfileByName = async (name) => {
        return await this.profileRepository.getProfileByName(name);
    }

    getProfile = async (id) => {
        return await this.profileRepository.getProfile(id);
    }

    getAllProfiles = async () => {
        return await this.profileRepository.getAllProfiles();
    }

    updateProfileByUID = async (id, data) => {
        return await this.profileRepository.updateProfileByUID(id, data);
    }

    deleteProfileByUID = async (id) => {
        return await this.profileRepository.deleteProfileByUID(id);
    }

    updateProfile = async (id, data) => {
        return await this.profileRepository.updateProfile(id, data);
    }

    deleteProfile = async (id) => {
        return await this.profileRepository.deleteProfile(id);
    }
}