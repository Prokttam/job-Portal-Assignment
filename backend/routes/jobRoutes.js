import express from "express";
import {
  deleteJob,
  getAllJobs,
  getMyJobs,
  getSingleJob,
  postJob,
  updateJob,
} from "../controllers/jobController.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();

// Route to fetch all jobs with pagination
router.get("/getall", getAllJobs);

// Route to post a job, requires authentication
router.post("/post", isAuthenticated, postJob);

// Route to fetch jobs posted by the authenticated user
router.get("/getmyjobs", isAuthenticated, getMyJobs);

// Route to update a job, requires authentication
router.put("/update/:id", isAuthenticated, updateJob);

// Route to delete a job, requires authentication
router.delete("/delete/:id", isAuthenticated, deleteJob);

// Route to fetch a single job by ID, requires authentication
router.get("/:id", isAuthenticated, getSingleJob);

export default router;
