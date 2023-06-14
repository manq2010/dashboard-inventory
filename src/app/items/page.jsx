'use client'

// import { useRouter } from 'next/navigation';
// import useAxios from "../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import DashboardLayout from '@/app/components/dashboard/layout';
import getAllItems from '@/app/lib/getAllItems';
// import Image from 'next/image';
import ListItems from '../components/ListItems';

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
    status,
    isLoading
  } = useQuery({
    queryKey: ['items'], 
    queryFn: fetchItems, 
    keepPreviousData: true,
  })

  console.log(data);

  // const router = useRouter();

  const content = (
    <>
  
    {/* <ul>
      {
        data && data?.items?.map((item) => (
          <li key={item.slug}>
              <p onClick={() => router.push(`/items/${item.slug}`)}>
              {item.title}
              </p>
          </li>
        ))
      }
    </ul> */}

    { isLoading && <p>Loading items...</p> }
    {status === "error" && <p>Error fetching data</p>}

    <ListItems data={data} />
    </>
  )

  return (
    <DashboardLayout>
      {content}
    </DashboardLayout>
  );
}
