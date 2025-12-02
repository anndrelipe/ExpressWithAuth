import { Router } from "express";

import { authHandle } from "../middlewares/authHandle.js"
import { adminAuthHandle } from "../middlewares/adminAuthHandle.js"

import { ProfileRepository } from "../repositories/profile.repository.js";
import { ProfileService } from "../services/profile.service.js";
import { ProfileController } from "../controllers/profile.controller.js";

const profileRepository = new ProfileRepository();
const profileService = new ProfileService(profileRepository);
const profileController = new ProfileController(profileService);

const router = Router();

// só ver se está logado
router.post("/create", authHandle, profileController.createProfile);
router.get("/name/:name", authHandle, profileController.getProfileByName);
router.patch("/me/update", authHandle, profileController.updateOwnProfile);
router.delete("/me/delete", authHandle,  profileController.deleteOwnProfile);

// mudar authhandle para verificar se tem role de admin
router.get("/", adminAuthHandle, profileController.getAllProfile);
router.get("/id/:id", adminAuthHandle, profileController.getProfileById);
router.patch("/admin/:id", adminAuthHandle, profileController.updateProfile);
router.delete("/admin/:id", adminAuthHandle, profileController.deleteProfile);

export default router;