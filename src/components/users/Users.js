'use client'

const { useRouter } = require("next/navigation")

export default function Users({ data }) {
  const router = useRouter()

  return (
    <div className="p-3 mt-6 relative overflow-x-auto">
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
        <th scope="col" className="px-6 py-3">
        UserName
        </th>
        <th scope="col" className="px-6 py-3">
        Email
        </th>
        </tr>
    </thead>
    <tbody>
        {data &&
        data?.map((user) => (
            <tr
            key={user.slug}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
            >
            <td className="px-6 py-4">{user.username}</td>
            <td className="px-6 py-4">{user.email}</td>
            </tr>
        ))}
    </tbody>
    </table>
</div>
  );
}
