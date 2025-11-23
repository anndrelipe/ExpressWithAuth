import { Router } from "express";

import roleRouter from "./role.route.js";
import userRouter from "./user.route.js";

const router =  Router();

router.use("/role", roleRouter);
router.use("/user", userRouter);

export default router;