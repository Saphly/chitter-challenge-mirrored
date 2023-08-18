import express from "express";

import { newUserRegistrationValidation } from "../middlewares/users.validation.js";
import { userRegisterController } from "../controllers/registration.controller.js";

const router = express.Router();

// router.route("/").post(async (req, res) => {
//   const { email, username } = req.body;

//   const findUserByEmail = await userFindOneService({ email });
//   const findUserByUsername = await userFindOneService({ username });

//   if (findUserByEmail) {
//     res.send({ message: "Email already registered" });
//   } else if (findUserByUsername) {
//     res.send({ message: "Username already registered" });
//   } else {
//     try {
//       const newUser = await userRegistrationService(req.body);
//       res.send({ message: "Registration success" });
//     } catch (error) {
//       res.send({ message: "Registration failed" });
//     }
//   }
// });
router.route("/").post(newUserRegistrationValidation, userRegisterController);

export { router as register };
