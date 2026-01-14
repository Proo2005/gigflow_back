import express from "express";
import {
  createMessage,
  getMessagesByJobPoster,
  confirmMessage,
  getConfirmedJobsForFreelancer,
} from "../controllers/message.controller.js";

const router = express.Router();

router.post("/create", createMessage);

router.get("/my-messages/:email", getMessagesByJobPoster);

router.patch("/confirm/:id", confirmMessage);

router.get("/freelancer/:email", getConfirmedJobsForFreelancer);

export default router;
