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

    getProfile = async (req, res, next) => {
        const name = req.params.name;

        try {
            const profile = await this.profileService.getProfile(name);
            return res.status(200).json({
                message: "profile successfuly found",
                content: profile,
                error: []
            })
        } catch (err) {
            next(err);
        }
    }

    updateProfile = async (req, res, next) => {
        const userId = req.user.id;
        const data = req.body;

        try {
            const [rowsUpdated, profileUpdated] = await this.profileService.updateProfile(userId, data);
            return res.status(201).json({
                message: "profile successfuly created",
                content: profileUpdated,
                error: []
            })
        } catch (err) {
            next(err);
        }  
    }

    deleteProfile = async (req, res, next) => {
        const userId = req.user.id;

        try {
            const [rowsUpdated, profileUpdated] = await this.profileService.deleteProfile(userId);
            return res.status(201).json({
                message: "profile successfuly created",
                content: profileUpdated,
                error: []
            })
        } catch (err) {
            next(err);
        }  
    }
}
