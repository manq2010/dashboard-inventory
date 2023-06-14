import configAxios from "./configAxios";

export default async function getItem(itemId) {
  const axios = configAxios()
  const res = await axios.get(`/items/${itemId}`)
  return res.data.data
}