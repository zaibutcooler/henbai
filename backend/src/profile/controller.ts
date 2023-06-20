import { Response, Request } from "express";
import Model from "./Profile";

export const getAll = async (req: Request, res: Response) => {
  try {
    const items = await Model.find();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getOne = async (req: Request, res: Response) => {
  try {
    const item = await Model.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createOne = async (req: Request, res: Response) => {
  try {
    const { user, photo, firstName, lastName, isSeller, dob, country, city } =
      req.body;
    const item = new Model({
      user,
      photo,
      firstName,
      lastName,
      isSeller,
      dob,
      country,
      city,
    });
    await item.save();
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const updateOne = async (req: Request, res: Response) => {
  try {
    const { user, photo, firstName, lastName, isSeller, dob, country, city } =
      req.body;
    const item = await Model.findByIdAndUpdate(
      req.params.id,
      { user, photo, firstName, lastName, isSeller, dob, country, city },
      { new: true }
    );
    if (!item) {
      return res.status(401).json({ message: "Invalid Id" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteOne = async (req: Request, res: Response) => {
  try {
    const item = await Model.findByIdAndDelete(req.params.id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
