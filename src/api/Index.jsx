import { newBaseAPI, baseAPI } from "../config/apiService";

export const api = {
  getUsers: () => {
    return baseAPI.get("/v1/users");
  },
  getDosen: () => {
    return baseAPI.get("/v1/dosen");
  },
  getMahasiswa: () => {
    return baseAPI.get("/v1/mahasiswa");
  },
  /// API with Token
  // Login
  login: (body) => {
    return newBaseAPI.post("/v1/users/login", body);
  },
};

