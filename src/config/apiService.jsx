// auth.js

import axios from "axios";

export const baseAPI = axios.create({
  baseURL: "http://testing.biaracmpny.my.id",
});

// Menambahkan interceptor untuk menyertakan token pada setiap permintaan
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
  login: (credentials) => {
    return baseAPI.post("/v1/users/login", credentials).then((response) => {
      const token = response.data.token; // asumsikan token berada dalam response.data
      localStorage.setItem("token", token); // simpan token ke dalam localStorage
      return response;
    });
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
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  return token;
};
