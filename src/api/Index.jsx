import { baseAPI } from "../config/apiService";

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
  /// API with Token
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
};
