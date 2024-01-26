const mongoose = require("mongoose");

const ServiceHistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  employee: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Employee",
  },
  service: {
    serviceType: { type: String, required: true },
    bookingDate: { type: Date, required: true },
    serviceDate: { type: Date, required: true },
    serviceStatus: { type: String, required: true },
    description: { type: String, required: false },

    rating: { type: Number },
  },
});
