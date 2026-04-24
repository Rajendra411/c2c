import express from "express";
import { body } from "express-validator";
import { getCurrentUser, loginUser, registerUser } from "../controllers/userController.js";
import { protectUser } from "../middleware/userAuthMiddleware.js";
import validateRequest from "../middleware/validateRequest.js";

const router = express.Router();

router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required."),
    body("email").isEmail().withMessage("A valid email is required."),
    body("password").isLength({ min: 6 }).withMessage("Password must be at least 6 characters."),
  ],
  validateRequest,
  registerUser
);

router.post(
  "/login",
  [body("email").isEmail().withMessage("A valid email is required."), body("password").notEmpty().withMessage("Password is required.")],
  validateRequest,
  loginUser
);

router.get("/me", protectUser, getCurrentUser);

export default router;

