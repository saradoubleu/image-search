import axios from "axios";

const baseURL = "https://api.shutterstock.com";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    // "User-Agent": "stwomi",
    Authorization: `Bearer ${process.env.REACT_APP_SHUTTERSTOCK_API_TOKEN}`,
  },
});

export default instance;
