import Image from "next/image";
import { useRouter } from 'next/navigation';

export default function ListItems({ data }) {
    // const { data } = params
    const router = useRouter();
  
    return (
        <div className="p-3 mt-6 relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                <th scope="col" className="px-6 py-3">
                <span className="sr-only">Image</span>
                </th>
                <th scope="col" className="px-6 py-3">
                Name
                </th>
                <th scope="col" className="px-6 py-3">
                Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                    Category
                </th>
                <th scope="col" className="px-6 py-3">
                    Price
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Action</span>
                </th>
                </tr>
            </thead>
            <tbody>
                {data &&
                data?.items?.map((item) => (
                    <tr
                    key={item.slug}
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                    <td
                        scope="row"
                        className="px-6 py-4"
                    > 
                        <Image
                        priority
                        src={item.images[0].url}
                        alt="Item" 
                        width={60} 
                        height={60}
                        className='rounded'
                        />
                    </td>
                    <td
                        scope="row"
                        className="flex-row"
                    >
                        <span
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white hover:underline cursor-pointer"
                        onClick={() => router.push(`/items/${item.slug}`)}
                        >
                        {item.title}
                        </span>
                    </td>
                    <td className="px-6 py-4">{item.quantity}</td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4" text-center>R {item.price}</td>
                    <td
                    scope="row" 
                    className="px-6 py-4 text-right">
                        <span
                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline cursor-pointer"
                        onClick={() => router.push(`/items/${item.slug}`)}
                        >
                        Edit
                        </span>
                        <span 
                        className=" ml-2 font-medium text-red-600 dark:text-red-500 hover:underline cursor-pointer"
                        onClick={() => router.push(`/items/${item.slug}`)}
                        >
                        Remove
                        </span>
                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
    );
}
