import getAllUsers from '@/lib/getAllUsers';

export const metadata = {
  title: 'Users',
}

export default async function UsersPage() {
  const data = await getAllUsers();
  return (
    <div>

      <h1>Users</h1>
        {/* <ul>
          {data?.map((user) =>
          <li key={user.id}>
            {user.username}
          </li>
          )}
        </ul> */}
    </div>
  );
}