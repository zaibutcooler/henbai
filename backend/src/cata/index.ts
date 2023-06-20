import { Response, Router, Request } from "express";
import protectRoutes from "../middlewares/protectRoutes";
import Model from "./Cata";

const router = Router();

router.get("/", protectRoutes, async (req: Request, res: Response) => {
  try {
    const items = await Model.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/:id", protectRoutes, async (req: Request, res: Response) => {
  try {
    const item = await Model.findById(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/", protectRoutes, async (req: Request, res: Response) => {
  try {
    const { name, big, enhance } = req.body;
    const item = new Model({ name, big, enhance });
    await item.save();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.patch("/:id", protectRoutes, async (req: Request, res: Response) => {
  try {
    const { name, big, enhance } = req.body;
    const item = await Model.findByIdAndUpdate(
      req.params.id,
      { name, big, enhance },
      { new: true }
    );
    if (!item) {
      return res.status(401).json({ message: "Invalid Id" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.delete("/", protectRoutes, async (req: Request, res: Response) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
