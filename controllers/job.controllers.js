import Job from "../models/job.models.js";
import ApiFeatures from "../utils/apiFeatures.js";

export const getAllJobs = async (req, res, next) => {
  try {
    const apiFeature = new ApiFeatures(Job.find(), req.query).search().filter();

    let job = await apiFeature.query;

    res.status(200).json({
      success: true,
      job,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const addJob = async (req, res) => {
  try {
    const {
      jobTitle,
      companyName,
      location,
      jobType,
      minSalary,
      maxSalary,
      jobDescription,
      applicationDeadline,
    } = req.body;

    const job = await Job.create({
      jobTitle,
      companyName,
      location,
      jobType,
      minSalary,
      maxSalary,
      jobDescription,
      applicationDeadline,
    });

    res.status(201).json({
      success: true,
      message: job,
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};
