// src/lib/axiosInstance.ts
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com", // Ini URL "gudang" datanya
  timeout: 10000, // Tunggu maks 10 detik
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;