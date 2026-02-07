import express from "express";
import { test, getUsers, getUser, updateUser, deleteUser } from "../controllers/user.controller.js";
import { verifyToken } from "../middleware/verifyToken.js"; // This is the logic that checks the cookie

const router = express.Router();

router.get("/test", test);
router.get("/", getUsers);
router.get("/:id", getUser);

// PROTECTED ROUTES: These now require the user to be signed in
router.put("/:id", verifyToken, updateUser);
router.delete("/:id", verifyToken, deleteUser);

export default router;