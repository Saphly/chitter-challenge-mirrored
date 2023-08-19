import { check } from "express-validator";

export const newUserRegistrationValidation = [
  check("email").trim().isEmail().exists(),
  check("password").isString().exists(),
  check("name").isString().exists(),
  check("username").isString().exists(),
];

export const userLoginValidation = [
  check("email").trim().isEmail().exists(),
  check("password").isString().exists(),
];
