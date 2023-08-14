import mongoose from "mongoose";

const peepSchema = new mongoose.Schema({
  username: { type: String, required: true },
  name: { type: String, required: true },
  dateCreated: { type: Date, default: Date.now, required: true },
  peep: { type: String, required: true },
});

const Peep = mongoose.model("Peep", peepSchema);

export default Peep;
