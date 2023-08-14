import express from "express";

import { addPeepController } from "../controllers/addPeep.controller";
import { newPeepValidation } from "../middlewares/peeps.validation";

const router = express.Router();

router.route("/").post(newPeepValidation, addPeepController);

export { router as addPeep };
