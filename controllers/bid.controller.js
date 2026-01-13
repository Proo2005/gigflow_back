import Bid from "../models/bid.model.js";
import Gig from "../models/gig.model.js";

// Create a bid (freelancer)
export const createBid = async (req, res) => {
  try {
    const { gigId, message, amount } = req.body;

    const gig = await Gig.findById(gigId);
    if (!gig) return res.status(404).json({ message: "Gig not found" });

    const bid = await Bid.create({
      gigId,
      freelancerId: req.user._id,
      freelancerName: req.user.name,
      freelancerEmail: req.user.email,
      clientId: gig.ownerId,
      clientName: gig.ownerName,
      clientEmail: gig.ownerEmail,
      message,
      amount,
      status: "pending",
    });

    res.status(201).json(bid);
  } catch (err) {
    res.status(500).json({ message: "Failed to create bid" });
  }
};

// Get all bids (client sees bids on their jobs, freelancer sees their applications)
export const getBids = async (req, res) => {
  try {
    const user = req.user;

    const filter =
      user.userType === "freelancer"
        ? { freelancerId: user._id }
        : { clientId: user._id };

    const bids = await Bid.find(filter);
    res.json(bids);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch bids" });
  }
};

// Confirm bid (client only)
export const confirmBid = async (req, res) => {
  try {
    const bid = await Bid.findById(req.params.id);
    if (!bid) return res.status(404).json({ message: "Bid not found" });

    if (bid.clientId.toString() !== req.user._id)
      return res.status(403).json({ message: "Unauthorized" });

    bid.status = "confirmed";
    await bid.save();

    res.json({ message: "Bid confirmed" });
  } catch (err) {
    res.status(500).json({ message: "Failed to confirm bid" });
  }
};
