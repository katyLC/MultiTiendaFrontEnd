import axios from "axios";

console.log(window.localStorage.getItem("jwt_access_token"));

export default axios.create({
  baseURL: `http://192.168.0.5:8080/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `Bearer ${window.localStorage.getItem("jwt_access_token")}`
  }
});
