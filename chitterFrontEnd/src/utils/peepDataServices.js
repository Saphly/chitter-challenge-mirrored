import axios from "axios";

export const getPeeps = async () => {
  try {
    const res = await axios.get(import.meta.env.VITE_API_URL);
    if (res.data?.length > 0) {
      return {
        peeps: res.data,
        status: res.status,
      };
    }
    throw new Error("There are no new peeps!");
  } catch (e) {
    return {
      peeps: [],
      status: e.response?.status ?? 204,
      error: {
        type: "get",
        message: `Data not available from the server: ${
          e.message ?? e.response.message
        }`,
      },
    };
  }
};

export const postPeeps = async () => {
  // try {
  // } catch (e) {
  // }
};
