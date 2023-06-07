import Link from 'next/link';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
              <Link href={"/"}>Home</Link>
          </li>
          <li>
              <Link href={"/items"}>Items</Link>
          </li>
          <li>
              <Link href={"/blog"}>Blog</Link>
          </li>
          <li>
              <Link href={"/contact-us"}>Contact Us</Link>
          </li>
                <li>
              <Link href={"/about-us"}>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
