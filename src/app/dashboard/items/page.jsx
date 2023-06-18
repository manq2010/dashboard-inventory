import ListItems from '../../components/ListItems';
import getAllItems from '../../lib/getAllItems';

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
