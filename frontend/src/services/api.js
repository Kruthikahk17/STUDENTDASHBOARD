import axios from "axios";

const API = axios.create({
  baseURL: "https://student-dashboard-backend-x92c.onrender.com/api",
});

export default API;