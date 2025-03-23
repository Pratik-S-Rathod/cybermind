import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
      trim: true,
    },
    companyName: {
      type: String,
      required: true,
      trim: true,
    },
    location: {
      type: String,
      enum: ["Bengalore", "Hyderabad", "Mumbai", "Pune", "Chennai", "Others"],
      trim: true,
    },
    jobType: {
      type: String,
      enum: ["Internship", "Full-time", "Partime", "Contract"],
      required: true,
    },
    minSalary: {
      type: Number,
      required: true,
    },
    maxSalary: {
      type: Number,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
      trim: true,
    },
    applicationDeadline: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Jobs", jobSchema);
