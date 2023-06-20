// import configAxios from "./configAxios";

export default async function getAllUsers() {
  // const axios = configAxios()
  // const res = await axios.get('v1/auth/users')
  // return res.data.data
  const response = await fetch('http://localhost:4000/api/v1/users')

  return response.json() 
}
