import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    budget: { type: Number, required: true },

    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Job", jobSchema);
