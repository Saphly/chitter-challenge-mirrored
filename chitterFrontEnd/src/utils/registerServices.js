import axios from "axios";

export const register = async ({ email, password, name, username }) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/register`, {
      email,
      password,
      name,
      username,
    });

    return res.data;
  } catch (e) {
    return { error: e.response.data };
  }
};
