import Message from "../models/message.model.js";

// Create new message/offer (existing)
export const createMessage = async (req, res) => {
  try {
    const {
      jobId,
      jobTitle,
      jobPosterEmail,
      senderName,
      senderEmail,
      message,
      offerAmount,
    } = req.body;

    if (
      !jobId ||
      !jobTitle ||
      !jobPosterEmail ||
      !senderName ||
      !senderEmail ||
      !message ||
      !offerAmount
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newMessage = await Message.create({
      jobId,
      jobTitle,
      jobPosterEmail,
      senderName,
      senderEmail,
      message,
      offerAmount,
      status: "pending",
    });

    res.status(201).json({ message: "Message sent successfully", newMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET all messages for a logged-in job poster
export const getMessagesByJobPoster = async (req, res) => {
  try {
    const { email } = req.params;
    const messages = await Message.find({ jobPosterEmail: email }).sort({ createdAt: -1 });
    res.status(200).json(messages);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// PATCH confirm a message (pending → confirmed)
export const confirmMessage = async (req, res) => {
  try {
    const { id } = req.params;

    const message = await Message.findById(id);
    if (!message) return res.status(404).json({ message: "Message not found" });

    message.status = "confirmed";
    await message.save();

    res.status(200).json({ message: "Message confirmed", updatedMessage: message });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};


// Get confirmed jobs for freelancer
export const getConfirmedJobsForFreelancer = async (req, res) => {
  try {
    const { email } = req.params;

    const confirmedJobs = await Message.find({
      senderEmail: email,
      status: "confirmed",
    }).sort({ createdAt: -1 });

    res.status(200).json(confirmedJobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};
