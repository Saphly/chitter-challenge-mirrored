import User from "../models/user.model.js";

export const userFindOneService = async (field) => {
  try {
    return await User.findOne(field);
  } catch (e) {
    throw e;
  }
};

export const userRegistrationService = async (newUserData) => {
  try {
    const user = new User(newUserData);
    return await user.save();
  } catch (e) {
    throw e;
  }
};
