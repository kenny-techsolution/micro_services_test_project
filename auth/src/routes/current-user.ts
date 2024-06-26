import express from "express";
import { currentUser } from "../middleware/current-user";
import { requireAuth } from "../middleware/require-auth";
const router = express.Router();

router.get("/api/users/currentuser", currentUser, requireAuth, (req, res) => {
  return res.json({ currentUser: req.currentUser || null });
});

export { router as currentUserRouter };
