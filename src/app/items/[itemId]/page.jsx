'use client'


import { useRouter } from 'next/navigation';
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";

export default function SingleItem({ params }) {
  const { axios } = useAxios();
  const router = useRouter();

  const fetchItems = async() => {
    const res = await axios.get(`/items/${params.itemId}`)
    return res.data.data
}

  const { data = {} , isLoading, isError } = useQuery({queryKey: ['item'], queryFn: fetchItems})
  const { item } = data
  return (
    <div>
      {
        item && (
          <div>
            <h1>Single Item</h1>
            <h4>{ item.name}</h4>
            <h3>{ item.category}</h3>
            <p>{item.item_quantity }</p>
            <p>{item.selling_price }</p>
            <p>{item.buying_price }</p>

            <button type="button" onClick={() => router.push('/items')}>
            &larr; back to items
            </button>
          </div>
        )
      }
    </div>
  );
}
