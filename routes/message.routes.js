import express from "express";
import {
  createMessage,
  getMessagesByJobPoster,
  confirmMessage,
  getConfirmedJobsForFreelancer,
} from "../controllers/message.controller.js";

const router = express.Router();

// Create a new message/offer
router.post("/create", createMessage);

// Get all messages for a logged-in job poster
router.get("/my-messages/:email", getMessagesByJobPoster);

// Confirm a message (update status)
router.patch("/confirm/:id", confirmMessage);

// New route for freelancer to get confirmed jobs
router.get("/freelancer/:email", getConfirmedJobsForFreelancer);

export default router;
