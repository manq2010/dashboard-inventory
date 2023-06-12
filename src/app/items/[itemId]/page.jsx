'use client'

import { useRouter } from 'next/navigation';
// import useAxios from "../../hooks/useAxios";
import getItem from '@/app/lib/getItem';
import getAllItems from '@/app/lib/getAllItems';
import { useQuery } from "@tanstack/react-query";
import DashboardLayout from '@/app/components/dashboard/layout';

export default function SingleItem({ params: { itemId } }) {
  // const { axios } = useAxios();
  const router = useRouter();

//   const fetchItems = async() => {
//     const res = await axios.get(`/items/${params.itemId}`)
//     return res.data.data
// }

const fetchItem = async() => {
  const item = await getItem(itemId)
  return item
}

  const { data = {} , isLoading, isError } = useQuery({
    queryKey: ['item'], 
    queryFn: fetchItem
  })
  const { item } = data

  const content = (
    <>
    {
      item && (
        <div>
          <h1>Single Item</h1>
          <h4>{ item.title}</h4>
          <h3>{ item.description}</h3>
          <p>{item.price }</p>
          <p>{item.available }</p>
          <p>{item.quantity }</p>
          <p>{item.category }</p>
          <p>{item.sku }</p>
          <p>{item.tag }</p>
          <p>{item.weight }</p>
          <p>{item.tag }</p>
          <p>{item.size }</p>
          <p>{item.color }</p>
  
          <button type="button" onClick={() => router.push('/items')}>
          &larr; back to items
          </button>
        </div>
      )
    }
    </>
  )
  return (
    <DashboardLayout>
      {content}
    </DashboardLayout>
  );
}

export async function generateStaticParams() {
  const fetchItems = await getAllItems();
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data = {} } = useQuery({
    queryKey: ['items'], 
    queryFn: fetchItems 
  })
  const { items } = data

  return items.map(item => ({
    itemId: item.slug
  }));
}