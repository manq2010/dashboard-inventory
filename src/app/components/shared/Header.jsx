import Link from 'next/link';

export default function Header() {
  return (
    <header>
        <ul>
          <li>
              <Link href={"/"}>Overview</Link>
          </li>
          <li>
              <Link href={"/analytics"}>Analytics</Link>
          </li>
          <li>
              <Link href={"/rentals"}>Rentals</Link>
          </li>
          <li>
              <Link href={"/account"}>Account</Link>
          </li>
          <li>
              <Link href={"/customers"}>Customers</Link>
          </li>
          <li>
              <Link href={"/items"}>Items</Link>
          </li>
          <li>
              <Link href={"/orders"}>Orders</Link>
          </li>
          <li>
              <Link href={"/invoices"}>Invoices</Link>
          </li>
          <li>
              <Link href={"/logistics"}>Logistics</Link>
          </li>
          <li>
              <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
              <Link href={"/kanban"}>Kanban</Link>
          </li>
          <li>
              <Link href={"/chat"}>Chat</Link>
          </li>
          <li>
              <Link href={"/calender"}>Calender</Link>
          </li>
        </ul>
    </header>
  );
}
