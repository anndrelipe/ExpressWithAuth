import { NotFoundError } from "../errors/NotFoundError.js";

export class RoleController {
    constructor (roleService) {
        this.roleService = roleService;
    }

    findAll     = async (req, res, next) => {
        try {
            const roles = await this.roleService.findAll();
            return res.status(200).json({
                "sucess": true,
                "message": "list of roles",
                "content": roles,
                "error": null
            });
        } catch (err) {
            next(err);
        }
    }

    create      = async (req, res, next) => {
        try {
            const data = req.body;
            const role = await this.roleService.create(data);
            return res.status(201).json({
                "sucess": true,
                "message": "A new role has just been added.",
                "content": role,
                "error": null
            });
        } catch (err) {
            next(err);
        }
    }

    findById      = async (req, res, next) => {
        var role;

        try {
            const id = req.params.id;
            role = await this.roleService.findById(id);

            if (!role) {
                throw new NotFoundError("Something went wrong... We can't find any role with id: " + id);
            }
        } catch (err) {
            return next(err);
        }

        return res.status(200).json({
                "sucess": true,
                "message": "Role found",
                "content": role,
                "error": null
        });
    }

    updateById  = async (req, res, next) => {
        try {
            const id = req.params.id;
            const data = req.body;
            const role = await this.roleService.updateById(id, data);
            return res.status(200).json({
                "sucess": true,
                "message": "Role has just been updated",
                "content": role,
                "error": null
            });
        } catch (err) {
            next(err);
        }
    }

    deleteById  = async (req, res, next) => {
        try {
            const id = req.params.id;
            const role = await this.roleService.deleteById(id);
            return res.status(200).json({
                "sucess": true,
                "message": "Role has just been deleted",
                "content": role,
                "error": null
            });
        } catch (err) {
            next(err);
        }
    }
}