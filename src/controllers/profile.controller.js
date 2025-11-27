export class ProfileController {
    constructor (profileService) {
        this.profileService = profileService;
    }

    createProfile = async (req, res, next) => {
        const { name, birthday, bio } = req.body;
        const userId = req.user.id;

        try {
            const profile = await this.profileService.createProfile({name:name, birthday:birthday, bio:bio, userId: userId});
            return res.status(201).json({
                message: "profile successfuly created",
                content: profile,
                error: []
            })
        } catch (err) {
            next(err);
        }
    }

    getProfileByName = async (req, res, next) => {
        const name = req.params.name;

        try {
            const profile = await this.profileService.getProfileByName(name);
            return res.status(200).json({
                message: "profile successfuly found",
                content: profile,
                error: []
            })
        } catch (err) {
            next(err);
        }
    }

    getAllProfile = async (req, res, next) => {
        try {
            const profiles = await this.profileService.getAllProfiles();
            return res.status(200).json({
                message: "list of profile successfuly found",
                content: profiles,
                error: []
            })
        } catch (err) {
            next(err);
        }
    }

    getProfileById = async (req, res, next) => {
        const id = req.params.id;

        try {
            const profile = await this.profileService.getProfile(id);
            return res.status(200).json({
                message: "profile successfuly found",
                content: profile,
                error: []
            })
        } catch (err) {
            next(err);
        }
    }

    updateOwnProfile = async (req, res, next) => {
        const userId = req.user.id;
        const data = req.body;

        try {
            const [rowsUpdated, profileUpdated] = await this.profileService.updateProfileByUID(userId, data);
            return res.status(201).json({
                message: "profile successfuly updated",
                content: profileUpdated,
                error: []
            })
        } catch (err) {
            next(err);
        }  
    }

    deleteOwnProfile = async (req, res, next) => {
        const userId = req.user.id;

        try {
            await this.profileService.deleteProfileByUID(userId);
            return res.status(201).json({
                message: "profile successfuly deleted",
                content: [],
                error: []
            })
        } catch (err) {
            next(err);
        }  
    }

    updateProfile = async (req, res, next) => {
        const id = req.params.id;
        const data = req.body;

        try {
            const [rowsUpdated, profileUpdated] = await this.profileService.updateProfile(id, data);
            return res.status(201).json({
                message: "profile successfuly updated",
                content: profileUpdated,
                error: []
            })
        } catch (err) {
            next(err);
        }  
    }

    deleteProfile = async (req, res, next) => {
        const id = req.params.id;

        try {
            await this.profileService.deleteProfile(id);
            return res.status(201).json({
                message: "profile successfuly deleted",
                content: [],
                error: []
            })
        } catch (err) {
            next(err);
        }  
    }
}
