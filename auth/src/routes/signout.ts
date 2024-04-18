import express from "express";
const router = express.Router();

router.post("/api/users/signout", () => {
  console.log("Sign out!");
});

export { router as signoutRouter };
