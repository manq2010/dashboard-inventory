import Users from "@/components/users/Users";
import getAllUsers from "@/lib/getAllUsers";

export const metadata = {
  title: 'Users',
}

export default async function UsersPage() {

  const data = await getAllUsers()
  return (
    <>
      <h3>
        Users page
      </h3>

     <Users data={data}/>
    </>
  );
}
