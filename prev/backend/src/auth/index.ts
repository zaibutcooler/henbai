import { Router } from "express";

import { login, register, addProfile } from "./controller";

const router = Router();

router.post("/login", login);
router.post("/register/", register);
router.patch("/add-profile", addProfile);

export default router;
