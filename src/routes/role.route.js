import { Router } from "express";

import { adminAuthHandle } from "../middlewares/adminAuthHandle.js";

import { RoleRepository } from "../repositories/role.repository.js";
import { RoleService } from "../services/role.service.js";
import { RoleController } from "../controllers/role.controller.js";

const router = Router();

const roleRepository = new RoleRepository();
const roleService = new RoleService(roleRepository);
const roleController = new RoleController(roleService);

router.use(adminAuthHandle);
router.get("/", roleController.findAll);
router.post("/", roleController.create);
router.get("/:id", roleController.findById);
router.patch("/:id", roleController.updateById);
router.delete("/:id", roleController.deleteById);

export default router;