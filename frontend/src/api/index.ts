import axios, { AxiosError } from "axios";

interface ErrorResponseData {
  message: string;
}

const api = axios.create({
  baseURL: "http://localhost:5001/api",
});

api.interceptors.response.use(
  (response) => response,
  (error: AxiosError<ErrorResponseData>) => {
    const message = error.response?.data?.message || error.message;
    return Promise.reject(new Error(message));
  }
);

export default api;
