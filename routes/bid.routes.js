import express from "express";
import { createJob, getAllJobs } from "../controllers/job.controller.js";

const router = express.Router();
// makae
router.post("/create", createJob);
router.get("/", getAllJobs);

export default router;
