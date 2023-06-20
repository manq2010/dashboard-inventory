import axios from "axios";

export default function configAxios() {
    const token = process.env.NEXT_PUBLIC_TOKEN;
    axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
    axios.defaults.withCredentials = false;
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return axios
}
