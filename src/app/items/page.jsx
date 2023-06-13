"use client"

import { useRouter } from 'next/navigation';
// import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import DashboardLayout from '@/app/components/dashboard/layout';
import getAllItems from '@/app/lib/getAllItems';


export default function ItemsPage() {
//   const { axios } = useAxios();

//   const fetchItems = async() => {
//     const res = await axios.get('/items')
//     return res.data.data
// }

const fetchItems = async() => {
  const items = await getAllItems();
  return items
}

  const { 
    data,
  } = useQuery({
    queryKey: ['items'], 
    queryFn: fetchItems, 
    keepPreviousData: true,
  })

  const router = useRouter();

  const content = (
    <>
      <h1>Item Listing</h1>

      {/* { isLoading && <p>Loading...</p> } */}
      {/* {status === "error" && <p>Error fetching data</p>} */}

    <ul>
      {
        data && data?.items?.map((item) => (
          <li key={item.slug}>
              <p onClick={() => router.push(`/items/${item.slug}`)}>
              {item.title}
              </p>
          </li>
        ))
      }
      </ul>
    </>
  )

  return (
    <DashboardLayout>
      {content}
    </DashboardLayout>
  );
}
