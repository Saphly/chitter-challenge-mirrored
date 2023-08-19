import axios from "axios";

export const getPeeps = async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL);
    if (res.data?.length > 0) {
      return {
        peeps: res.data,
      };
    }
    throw new Error("There are no new peeps!");
  } catch (e) {
    return {
      peeps: [],
      error: {
        message: `Data not available from the server: ${
          e.message ?? e.response.message
        }`,
      },
    };
  }
};

export const postPeeps = async ({ name, username, dateCreated, peep }) => {
  try {
    const res = await axios.post(`${import.meta.env.VITE_API_URL}/add-peep`, {
      name,
      username,
      dateCreated,
      peep,
    });
    console.log(res);
    if (res.data) {
      return { peep: res.data.peep, status: res.status };
    }
  } catch (e) {
    return {
      error: e.response.data,
    };
  }
};
