import { check } from "express-validator";

export const newPeepValidation = [
  check("username").exists(),
  check("name").exists(),
  check("dateCreated").exists().isISO8601(),
  check("peep").exists(),
];
