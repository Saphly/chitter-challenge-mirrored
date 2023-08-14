import express from "express";
import { allPeeps } from "../controllers/allPeeps.controller";

const router = express.Router();

router.route("/").get(allPeeps);

export { router as allPeeps };
