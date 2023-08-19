import { check } from "express-validator";

export const newPeepValidation = [
  check("username").isString().exists(),
  check("name").isString().exists(),
  check("dateCreated").exists().isISO8601(),
  check("peep").isString().exists(),
];
