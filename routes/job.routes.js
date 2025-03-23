import { Router } from "express";
import {getAllJobs, addJob} from "../controllers/job.controllers.js"

const router = Router();

router.route('/').get(getAllJobs).post(addJob)

export default router;
