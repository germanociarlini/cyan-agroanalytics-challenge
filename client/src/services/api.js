import axios from "axios";

const api = axios.create({
  baseUrl: process.env.DATABASE_URL || "http://localhost:3001",
});

export default api;
