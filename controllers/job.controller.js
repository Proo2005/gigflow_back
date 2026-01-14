import Job from "../models/job.model.js";

// @desc    Create a new job
// @route   POST /api/jobs/create
// @access  Private
export const createJob = async (req, res) => {
  try {
    const { title, description, budget, userName, userEmail } = req.body;

    // Validate required fields
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
};


export const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.status(200).json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};