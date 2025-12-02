import { Router } from "express";

import { authHandle } from "../middlewares/authHandle.js"
import { adminAuthHandle } from "../middlewares/adminAuthHandle.js"

import { UserRepository } from "../repositories/user.repository.js";
import { UserService } from "../services/user.service.js";
import { UserController } from "../controllers/user.controller.js";

const router = Router();

const userRepository = new UserRepository();
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.post("/register", userController.register);
router.post("/login", userController.login);

router.get("/me", authHandle, userController.getOwnUser);
router.patch("/update/me", authHandle, userController.updateOwnUser);
router.delete("delete/me", authHandle, userController.deleteOwnUser );

router.get("/id/:id", adminAuthHandle, userController.getRemoteUserById);
router.patch("/update/id/:id", adminAuthHandle, userController.updateRemoteUser);
router.delete("/delete/id/:id", adminAuthHandle, userController.deleteRemoteUser);

export default router;