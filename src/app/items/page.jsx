"use client"

import { useRouter } from 'next/navigation';
import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

export default function Items() {
  const { axios } = useAxios();

  const fetchItems = async() => {
    const res = await axios.get('/items')
    return res.data.data
}

  const { data, isLoading, isError } = useQuery({
    queryKey: ['items'], 
    queryFn: fetchItems, 
    keepPreviousData: true,
  })

  const router = useRouter();

  // console.log("data:", data)

  return (
    <div>
      <h1>Item Listing</h1>

      { isLoading && <p>Loading...</p> }

    <ul>
      {
        data && data?.items?.map((item) => (
          <li key={item.id}>
              <p onClick={() => router.push(`/items/${item.id}`)}>
              {item.name}
              </p>
          </li>
        ))
      }
      </ul>
    </div>
  );
}
