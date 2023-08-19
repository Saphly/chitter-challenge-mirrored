import { validationResult } from "express-validator";
import {
  userFindOneService,
  userRegistrationService,
} from "../services/users.service.js";

export const userRegisterController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({ message: "Registration failed" });
  }

  try {
    const { email, username } = req.body;

    const findUserByEmail = await userFindOneService({ email });
    const findUserByUsername = await userFindOneService({ username });

    if (findUserByEmail) {
      return res.status(400).send({ message: "Email already registered" });
    }
    if (findUserByUsername) {
      return res.status(400).send({ message: "Username already registered" });
    }

    await userRegistrationService(req.body);
    res.status(200).send({ message: "Registration success" });
  } catch (error) {
    res.send({ message: "Registration failed" });
  }
};
