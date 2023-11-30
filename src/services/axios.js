// src/services/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/api", // Your backend API base URL
});

export default instance;
