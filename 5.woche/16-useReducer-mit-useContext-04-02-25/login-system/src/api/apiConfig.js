// 📜 src/api.js
export const BASE_API_URL = import.meta.env.VITE_API_URL || "http://localhost:5010/api";

export const API = {
  LOGIN: `${BASE_API_URL}/users/login`, // Kullanıcı giriş endpoint'i
  USERS: `${BASE_API_URL}/users`, // Kullanıcı bilgileri endpoint'i
  UPDATE_USER: (userId) => `${BASE_API_URL}/users/${userId}`, // Kullanıcı güncelleme endpoint'i
};
