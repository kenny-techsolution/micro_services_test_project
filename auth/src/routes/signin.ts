import express, { Request, Response } from "express";
import { body } from "express-validator";
import { validateRequest } from "../middleware/validate-request";
import { User } from "../models/user";
import { BadRequestError } from "../errors/bad-request-error";
import { Password } from "../services/password";
import jwt from "jsonwebtoken";
const router = express.Router();

router.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Invalid email"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 chars."),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    console.log("Sign in!");
    const { email, password } = req.body;
    // TODO: implement sign in logic
    const user = await User.findOne({ email });
    if (!user) {
      throw new BadRequestError("credentials not valid");
    }
    const passwordMatch = await Password.compare(user.password, password);
    if (!passwordMatch) {
      throw new BadRequestError("credentials not valid");
    }
    const userJWT = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_KEY!
    );
    req.session = { jwt: userJWT };

    res.status(201).send(user);
  }
);

export { router as signinRouter };
