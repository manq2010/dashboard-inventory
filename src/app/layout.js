import ReactQueryWrapper from './ReactQueryWrapper'
import Footer from './components/shared/Footer'
import Header from './components/shared/Header'
import SideNav from './components/shared/SideNav'
import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inventory App',
  description: 'An inventory application',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={inter.className}>
          {/* <Header /> */}
          <SideNav />
          <main>
          <ReactQueryWrapper>
            {children}
          </ReactQueryWrapper>
          </main>
          <Footer />
          </body>
      </html>
  )
}
