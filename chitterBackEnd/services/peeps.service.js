import Peep from "../models/peep.model";

export const getPeepsService = async () => {
  try {
    return await Peep.find({});
  } catch (e) {
    throw e;
  }
};

export const addPeepService = async (newPeepData) => {
  try {
    const newPeep = new Peep(newPeepData);
    return await newPeep.save();
  } catch (e) {
    throw e;
  }
};
