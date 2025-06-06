import express from "express";
import {rateLimit} from "express-rate-limit";
import { register,signIn } from "../controllers/authController.js";

//ip rate limit
const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: true, // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
});

const router=express.Router();
//Register route

router.post("/register", limiter, register );
router.post("/login", signIn);

export default router;