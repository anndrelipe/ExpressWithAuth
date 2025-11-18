import { DataTypes } from "sequelize";
import { Role } from "./Role.model.js";
import sequelize from "../config/orm.config.js";

export const User = sequelize.define(
    'User',
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
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        status: {
            type: DataTypes.ENUM,
            values: ["PENDING", "VALIDATED"],
            defaultValue: "PENDING",
            allowNull: false
        },
        roleId: {
            type: DataTypes.INTEGER,
            references: {
                model: Role,
                key: 'id'
            },
            allowNull: false
        }
    }
);