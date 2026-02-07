import express from "express";
// Add 'logout' inside the curly braces here
import { signup, signin, logout } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/logout", logout); // Now it knows what 'logout' is
router.post('/signin', signin);

export default router;