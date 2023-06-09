import Link from "next/link"
import DashboardLayout from '@/app/components/dashboard/layout';

export default function Home() {
  return (
    <DashboardLayout>
      <section>
        <h1>Home Page</h1>
          <p>Hello, I&apos;m Mancoba. I&apos;m a sofware engineer! I can 
            help you build a product, feature or website. 
            Take a look of my work. If you like what you see 
            and have a project you need coded, don&apos;t hesitate 
            and contact me on <a href='https://www.linkedin.com/in/mancoba/'>LinkedIn</a>.</p>
          <p>
            <Link href={"/items"}>Items</Link>
          </p>
    
      </section>
    </DashboardLayout>
  )
}
