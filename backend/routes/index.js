import  express  from "express";
import authRoutes from "./authRoutes.js";
import userRoutes from "./userRoutes.js";
import companyRoute from "./companiesRoutes.js";
import jobRoute from "./jobsRoutes.js";
const router=express.Router();
const path="/api-v1/";

router.use(`${path}auth`, authRoutes); 
router.use(`${path}users`, userRoutes);
router.use(`${path}companies`, companyRoute);
router.use(`${path}jobs`, jobRoute);

export default router;