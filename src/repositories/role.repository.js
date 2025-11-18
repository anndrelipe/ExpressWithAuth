import { Role } from "../models/Role.model.js";

export class RoleRepository {

    findAll     = async () => {
        return await Role.findAll();
    }

    create      = async (data) => {
        return await Role.create(data);
    }

    findById    = async (id) => {
        return await Role.findByPk(id);
    }

    updateById  = async (id, data) => {
        return await Role.update(data, {
            where: {
                id: id
            }
        });
    }

    deleteById  = async (id) => {
        return await Role.destroy({
            where: {
                id: id
            }
        });
    }
}