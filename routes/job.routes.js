import express from "express";
import Job from "../models/job.model.js";

const router = express.Router();

// POST create a new job
router.post("/create", async (req, res) => {
  try {
    const { title, description, budget, userName, userEmail } = req.body;

    if (!title || !description || !budget || !userName || !userEmail) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newJob = await Job.create({
      title,
      description,
      budget,
      userName,
      userEmail,
    });

    res.status(201).json({ message: "Job created successfully", job: newJob });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// GET all jobs
router.get("/", async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
