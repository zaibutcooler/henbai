import { Router } from "express";
import { getAll, getOne, createOne, updateOne, deleteOne } from "./controller";
import protectRoutes from "../middlewares/protectRoutes";

const router = Router();

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", protectRoutes, createOne);

router.patch("/:id", protectRoutes, updateOne);

router.delete("/", protectRoutes, deleteOne);

router.get("/limit/:count", () => {});

router.get("/limit/trending", () => {});

router.get("/limit/:cata", () => {});

export default router;
