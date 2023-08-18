import express from "express";
import { userLoginValidation } from "../middlewares/users.validation.js";
import { userLoginController } from "../controllers/login.controller.js";

const router = express.Router();

router.route("/").post(userLoginValidation, userLoginController);

export { router as login };
