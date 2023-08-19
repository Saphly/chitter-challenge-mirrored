import { validationResult } from "express-validator";
import { userFindOneService } from "../services/users.service.js";

export const userLoginController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({ message: "Login failed" });
  }

  try {
    const { email, password } = req.body;

    const user = await userFindOneService({ email });

    if (user && password === user.password) {
      const { name, username } = user;
      return res
        .status(200)
        .json({ message: "Login success", user: { name, username } });
    }
    res.status(400).send({ message: "Details not found" });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: "Login failed" });
  }
};
