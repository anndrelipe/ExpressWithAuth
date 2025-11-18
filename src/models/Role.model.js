import { DataTypes } from "sequelize";
import sequelize from "../config/orm.config.js";

export const Role = sequelize.define(
    'Role',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        roleName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        }
    }
)