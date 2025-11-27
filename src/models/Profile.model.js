import { DataTypes } from "sequelize";
import { User } from "./User.model.js";
import sequelize from "../config/orm.config.js";

export const Profile = sequelize.define(
    'Profile',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        birthday: {
            type: DataTypes.DATE,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
        },
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: User,
                key: 'id'
            },
            allowNull: false,
            unique: true
        }
    }
);