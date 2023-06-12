import axios from "axios";

const baseAPI = axios.create({
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

const api = {
  login: (credentials) => {
    return baseAPI.post("/v1/users/login", credentials);
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

const newBaseAPI = axios.create({
  baseURL: "http://testing.biaracmpny.my.id",
});

export { baseAPI, api, newBaseAPI };
