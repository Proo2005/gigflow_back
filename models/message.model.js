import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    jobId: { type: mongoose.Schema.Types.ObjectId, ref: "Job", required: true },
    jobTitle: { type: String, required: true },
    jobPosterEmail: { type: String, required: true },

    senderName: { type: String, required: true },
    senderEmail: { type: String, required: true },

    message: { type: String, required: true },
    offerAmount: { type: Number, required: true },
    status: { type: String, default: "pending" }, // default status
  },
  { timestamps: true }
);

export default mongoose.model("Message", messageSchema);
