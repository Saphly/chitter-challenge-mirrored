import express from "express";
import { config } from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

import { allPeeps } from "./routes/allPeeps.route.js";
import { addPeep } from "./routes/addPeep.route.js";
import { login } from "./routes/login.route.js";
import { register } from "./routes/register.route.js";

config({ path: `.env.${process.env.NODE_ENV}` });

const port = process.env.PORT;
const host = process.env.HOST;
const app = express();

const main = async () => {
  console.log(`Connecting to DB at ${process.env.DB_URI}`);
  await mongoose.connect(process.env.DB_URI);
  console.log(`Connected to DB at ${process.env.DB_URI}`);
};

main().catch((error) => console.log(error));

app.use(express.json());
app.use(cors());
app.use("/", allPeeps);
app.use("/add-peep", addPeep);
app.use("/login", login);
app.use("/register", register);

const server = app.listen(port, host, () => {
  const SERVERHOST = server.address().address;
  const SERVERPORT = server.address().port;
  console.log(`Server is runnning on http://${SERVERHOST}:${SERVERPORT}`);
});

export default server;
