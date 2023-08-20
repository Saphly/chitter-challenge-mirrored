import { validationResult } from "express-validator";
import { addPeepService } from "../services/peeps.service.js";
import { userFindOneService } from "../services/users.service.js";

export const addPeepController = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(422).send({ message: "Posting new peep failed" });
  }

  try {
    const { username } = req.body;

    const findUserByUsername = await userFindOneService({ username });

    if (!findUserByUsername) {
      return res.status(400).send({ message: "User details not found" });
    }

    const peep = await addPeepService(req.body);
    res.status(201).json({ peep });
  } catch (e) {
    console.log("add peep cont err: ", e);
    res.status(400).send({ message: "Posting new peep failed" });
  }
};
