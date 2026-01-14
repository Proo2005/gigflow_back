import express from "express";
import { getFreelancers } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/freelancers", getFreelancers);

export default router;
