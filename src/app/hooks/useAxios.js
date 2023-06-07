"use client"

import axios from "axios";


const useAxios = () => {
//   const { token } = useSelector((state) => state.auth);
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  // axios.defaults.withCredentials = true;
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   console.log("CHECK Token status, DEV mode:", token);

  return { axios };
};

export default useAxios;