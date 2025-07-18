import express from "express";
import { registerUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", registerUser); // POST /api/v1/users/register

router.get("/test", (req, res) => {
    res.status(200).json({ message: "test working" });
});


export default router;
