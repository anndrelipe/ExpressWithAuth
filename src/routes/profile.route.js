import { Router } from "express";

import { authHandle } from "../middlewares/authHandle.js"

import { ProfileRepository } from "../repositories/profile.repository.js";
import { ProfileService } from "../services/profile.service.js";
import { ProfileController } from "../controllers/profile.controller.js";

const profileRepository = new ProfileRepository();
const profileService = new ProfileService(profileRepository);
const profileController = new ProfileController(profileService);

const router = Router();

router.post("/create", profileController.createProfile);
router.get("/name/:name", profileController.getProfileByName);
router.patch("/me/update", profileController.updateOwnProfile);
router.delete("/me/delete", profileController.deleteOwnProfile);

router.get("/", authHandle, profileController.getAllProfile);
router.get("/id/:id", authHandle, profileController.getProfileById);
router.patch("/admin/:id", authHandle, profileController.updateProfile);
router.delete("/admin/:id", authHandle, profileController.deleteProfile);

export default router;