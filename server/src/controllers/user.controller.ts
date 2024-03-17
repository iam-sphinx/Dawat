import { Request, Response } from "express";
import User from "../schemas/user.schema";

export const createUser = async (req: Request, res: Response) => {
  // check if user exists
  // create the user if it not exist
  // return the user object to the calling client

  try {
    const { auth0Id } = req.body;

    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).json({ message: "User already exist." });
    }

    const newUser = new User(req.body);

    await newUser.save();

    res.status(201).json(newUser.toObject());
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Error creating user" });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { name, address, country, city } = req.body;
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    interface toUpdateUser {
      [key: string]: string | undefined;
      name?: string;
      address?: string;
      country?: string;
      city?: string;
    }
    const toUpdateObj: toUpdateUser = {
      name,
      address,
      country,
      city,
    };

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      {
        $set: toUpdateObj,
      },
      { new: true }
    );

    res.status(200).json({ toUpdateObj });
  } catch (error: any) {
    res.status(500).json({ message: error.message || "Error updating user" });
  }
};

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findOne({ _id: req.userId });
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
