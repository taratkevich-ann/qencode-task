import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://auth-qa.qencode.com/v1/auth",
});
