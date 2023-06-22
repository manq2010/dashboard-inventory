import Providers from '@/providers/Providers'
// import ActionCableProvider from '@/providers/ActionCableProvider'
import ReactQueryWrapper from './ReactQueryWrapper'
import './styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Inventory App',
  description: 'An inventory application',
}

export default function RootLayout({ children }) {
  return (
      <html lang="en" className="h-full scroll-smooth antialiased">
        <body className={`${inter.className} h-full flex flex-col`}>
          <Providers >
          {/* <ActionCableProvider> */}
            <ReactQueryWrapper>
              {children}
            </ReactQueryWrapper>
            {/* </ActionCableProvider> */}
          </Providers>
          </body>
      </html>
  )
}
