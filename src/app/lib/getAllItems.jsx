import useAxios from "../hooks/useAxios";

export default async function GetAllItems() {
    const { axios } = useAxios();
    const res = await axios.get('/items')
  return res.data.data
}