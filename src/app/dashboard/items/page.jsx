import ListItems from '@/components/tables/ListItems';
import getAllItems from '@/lib/getAllItems';
ListItems

export const metadata = {
  title: 'Items',
}

export default async function ItemsPage() {

  const data =  await getAllItems();

  return (
    <>
      <ListItems data={data} />
    </>
  );
}
