import { Router } from "express";
import { handleURL, redirectUser } from "../controllers/user.controller.js";

const router = Router();

router.post("/", handleURL);
router.get("/:id", redirectUser);

export default router;
