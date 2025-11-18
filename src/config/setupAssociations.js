import { User } from "../models/User.model.js";
import { Role } from "../models/Role.model.js";

export const setupAssociations = () => {
    User.belongsTo(Role, { foreignKey: "roleId" });
}