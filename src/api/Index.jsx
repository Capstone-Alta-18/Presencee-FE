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
  login: (body) => {
    return baseAPI.post("/v1/users/login", body);
  },
  loginAdmin: (body) => {
    return baseAPI.post("/v1/users/admin", body);
  },
  loginDosen: (body) => {
    return baseAPI.post("/v1/users/dosen", body);
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
  getJadwal: () => {
    return baseAPI.get("/v1/jadwals");
  },
  createJadwal: (body) => {
    return baseAPI.post("/v1/jadwals", body);
  },
  deleteJadwal: (id) => {
    return baseAPI.delete(`/v1/jadwals/${id}`);
  },
  updateJadwal: (id_jadwal, body) => {
    return baseAPI.put(`/v1/jadwals/${id_jadwal}`, body);
  },
  getJadwalByID: (id_jadwal) => {
    return baseAPI.get(`/v1/jadwals/${id_jadwal}`);
  },
  deleteJadwalByID: (id_jadwal) => {
    return baseAPI.get(`/v1/jadwals/${id_jadwal}`);
  },
  updateUserDosen: (user_id, body) => {
    return baseAPI.put(`/v1/users/${user_id}`, body);
  },
  updateUserMahasiswa: (user_id, body) => {
    return baseAPI.put(`/v1/users/${user_id}`, body);
  },
  getAbsen: () => {
    return baseAPI.get("/v1/absens");
  },
  getMatkul: () => {
    return baseAPI.get("/v1/matakuliah");
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

  getJadwalDosenById: (dosen_id) => {
    return baseAPI.get(`/v1/jadwals/filter?jadwal_id=0&user_id=0&dosen_id=${dosen_id}&matakuliah_id=0&room_id=0`);
  },
  getAbsenDosen: (user_id) => {
    return baseAPI.get(`/v1/absens/filter?absen_id=0&user_id=${user_id}&mahasiswa_id=0&jadwal_id=0`);
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
  uploadImage: (body) => {
    return baseAPI.post("/v1/upload", body, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },
};
