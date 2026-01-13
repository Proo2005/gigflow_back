import mongoose from "mongoose";

const bidSchema = new mongoose.Schema(
  {
    gigId: { type: mongoose.Schema.Types.ObjectId, ref: "Gig", required: true },
    freelancerId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    freelancerName: { type: String, required: true },
    freelancerEmail: { type: String, required: true },
    clientId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    clientName: { type: String, required: true },
    clientEmail: { type: String, required: true },
    message: { type: String },
    amount: { type: Number, required: true },
    status: { type: String, enum: ["pending", "confirmed"], default: "pending" },
  },
  { timestamps: true }
);

export default mongoose.model("Bid", bidSchema);
