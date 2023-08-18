import { check } from "express-validator";

export const newUserRegistrationValidation = [
  check("email").trim().isEmail().exists(),
  check("password").exists(),
  check("name").exists(),
  check("username").exists(),
];

export const userLoginValidation = [
  check("email").trim().isEmail().exists(),
  check("password").exists(),
];
