"use client"

import axios from "axios";
import { useState } from "react";


const useAxios = () => {
 
  //   const { token } = useSelector((state) => state.auth);
  const token = process.env.NEXT_PUBLIC_TOKEN;
  axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
  axios.defaults.withCredentials = true;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return { axios };
};

export default useAxios;