import { Router } from "express";
import { getAll } from "./controller";
import protectRoutes from "../middlewares/protectRoutes";

const router = Router();

router.get("/", protectRoutes, getAll);

export default router;
