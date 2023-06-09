import useAxios from "../hooks/useAxios";

export default async function GetItem(itemId) {
  const { axios } = useAxios();
  const res = await axios.get(`/items/${itemId}`)
  return res.data.data
}