import express from "express";
const router = express.Router();

router.post("/api/users/signin", () => {
  console.log("Sign in!");
});

export { router as signinRouter };
