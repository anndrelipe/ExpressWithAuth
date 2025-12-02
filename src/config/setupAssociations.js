import { User } from "../models/User.model.js";
import { Role } from "../models/Role.model.js";
import { Profile } from "../models/Profile.model.js";

export const setupAssociations = () => {
    User.belongsTo(Role, { foreignKey: "roleId" });
    User.hasOne(Profile, {foreignKey: "userId"});
    Profile.belongsTo(User, {foreignKey: "userId"});
}