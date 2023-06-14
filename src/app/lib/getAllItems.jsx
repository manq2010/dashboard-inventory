import configAxios from "./configAxios";

export default async function getAllItems() {
  const axios = configAxios()
  const res = await axios.get('/items')
  return res.data.data
}