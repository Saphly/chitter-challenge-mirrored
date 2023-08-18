import axios from "axios";

export const login = async ({ email, password }) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/login`, {
      email,
      password,
    });

    return res.data;
  } catch (e) {
    console.log(e.response);
    return {
      error: {
        message: e.response.data,
      },
    };
  }
};

// export const register = async (email, password, name, username) => {};
