import axios from "axios";

const baseURL = "https://api.shutterstock.com";

const instance = axios.create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    //   "User-Agent":
    //     "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36",
    Authorization: `Bearer ${process.env.REACT_APP_SHUTTERSTOCK_API_TOKEN}`,
  },
});

export default instance;
