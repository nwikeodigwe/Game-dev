import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "2c430aae8f11470ca3e14b8c128734ed",
  },
});