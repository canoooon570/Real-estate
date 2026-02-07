import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const test = (req, res) => {
    res.send("Test route");
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: "Failed to get users!" });
    }
};

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({ message: "Failed to get user!" });
    }
};

export const updateUser = async (req, res) => {
    const id = req.params.id;
    const { password, ...inputs } = req.body;
    try {
        let hashedPass = password ? await bcrypt.hash(password, 10) : null;
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { ...inputs, ...(hashedPass && { password: hashedPass }) },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: "Failed to update!" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ message: "Delete failed!" });
    }
};