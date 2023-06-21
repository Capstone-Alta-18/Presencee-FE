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
  getUsers: () => {
    return baseAPI.get("/v1/users");
  },
  getDosen: () => {
    return baseAPI.get("/v1/dosen");
  },
  getRoom: () => {
    return baseAPI.get("/v1/room");
  },
  getAbsen: () => {
    return baseAPI.get("/v1/absens");
  },
  getMahasiswa: () => {
    return baseAPI.get("/v1/mahasiswa");
  },
  getDosenById: (id) => {
    return baseAPI.get(`/v1/dosen/${id}`);
  },
  getMahasiswaById: (id) => {
    return baseAPI.get(`/v1/mahasiswa/${id}`);
  },
  updateDosen: (id, body) => {
    return baseAPI.put(`/v1/dosen/${id}`, body);
  },
  deleteDosen: (id) => {
    return baseAPI.delete(`/v1/dosen/${id}`);
  },
  updateMahasiswa: (id, body) => {
    return baseAPI.put(`/v1/mahasiswa/${id}`, body);
  },
  deleteMahasiswa: (id) => {
    return baseAPI.delete(`/v1/mahasiswa/${id}`);
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

  // upload image
  uploadImage: (file) => {
    const formData = new FormData();
    formData.append("image", file);
    return baseAPI.post("/v1/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
