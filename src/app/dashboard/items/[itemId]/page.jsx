import getAllItems from '@/app/lib/getAllItems';
import getItem from '@/app/lib/getItem';
import Link from 'next/link';
import Image from 'next/image';

export async function  generateStaticParams() {
  const  data = await getAllItems()
  const { items } = data
  return items.map((item) => ({
    itemId: item.slug
  }));
}

export async function generateMetadata({ params: { itemId } }) {

  const  data = await getAllItems()
  const { items } = data

  const item = items.find(item => item.slug === itemId)

  if (!item) {
      return {
          title: 'Item Not Found'
      }
  }

  return {
      title: item.title,
  }
}

export default async function SingleItem({ params: { itemId } }) {

  const data = await getItem(itemId)
  const { item } = data

  // const  dataItems = getAllItems()
  // const { items } = await dataItems

  // console.log("dataItems", items);

  const content = (
    <>
      {item && (
        <div>
          <h1 className="text-3xl font-bold">Single Item</h1>
          <h4 className="text-lg font-semibold">{item.title}</h4>
          <h3 className="text-xl">{item.description}</h3>
          <p>R {item.price}</p>
          <p>Available: {item.available}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Category: {item.category}</p>
          <p>SKU: {item.sku}</p>
          <p>Tag: {item.tag}</p>
          <p>{item.weight} kg</p>
          <p>{item.size}</p>
          <p>Color: {item.color}</p>
  
          <Image
            priority
            src={item.images[0].url}
            alt="Item"
            width={200}
            height={200}
            className="rounded"
          />
  
          <Link href="/items" className="text-blue-500 mt-4 inline-block">
            &larr; back to items
          </Link>
        </div>
      )}
    </>
  );
  
  return (
    <>
        {content}
    </>
  );
}