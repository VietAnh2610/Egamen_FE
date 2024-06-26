import axios from "axios";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/signin`,
      data
    );
    return res.data;
  } catch (error) {
    console.error("Error ", error);
    throw error;
  }
};

export const signupUser = async (data) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_API_KEY}/user/signup`,
      data
    );
    return res.data;
  } catch (error) {
    console.error("Error ", error);
    throw error;
  }
};

export const getDetailsUser = async (id, access_token) => {
  try {
    const res = await axios.get(
      `${process.env.REACT_APP_API_KEY}/user/get-details/${id}`,
      {
        headers: {
          token: `Bearer ${access_token}`,
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Error ", error);
    throw error;
  }
};

export const refreshToken = async () => {
    try {
        const res = await axiosJWT.post(`${process.env.REACT_APP_API_KEY}/user/refresh-token`, {
            withCredentials: true
        });
        return res.data;
    } catch (error) {
        console.error("Error refreshing token:", error);
        throw error; 
    }
};
export const logoutUser = async () => {
    const res = await axios.post(`${process.env.REACT_APP_API_KEY}/user/log-out`) 
    return res.data;
};

