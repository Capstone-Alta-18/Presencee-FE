import axios from "axios";
import { BASE_URL } from "../utils";

const baseAPI = axios.create({
  baseURL: BASE_URL.API,
  headers: {
    "Content-Type": "application/json",
  },
});

baseAPI.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const api = {
  // API with Token
  // Login
  login: (body) => {
    return baseAPI.post("/v1/users/login", body);
  },
  loginAdmin: (body) => {
    return baseAPI.post("/v1/users/admin", body);
  },
  getUsers: () => {
    return baseAPI.get("/v1/users");
  },
  getDosen: () => {
    return baseAPI.get("/v1/dosen");
  },
  getMahasiswa: () => {
    return baseAPI.get("/v1/mahasiswa");
  },
  getDosenById: (id) => {
    return baseAPI.get(`/v1/dosen/${id}`);
  },
  signUp: (body) => {
    return baseAPI.post("/v1/users/signup", body);
  },
  createDosen: (body) => {
    return baseAPI.post("/v1/dosen", body);
  },
  createMahasiswa: (body) => {
    return baseAPI.post("/v1/mahasiswa", body);
  },
};
