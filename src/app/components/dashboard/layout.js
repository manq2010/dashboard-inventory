'use client'

import SideNav from '../shared/SideNav';
import Footer from '../shared/Footer';
import TopNav from '../shared/TopNav';


export default function Layout({ children }) {
  return (
    <>
      <TopNav />
      <SideNav />
      <div className='w-full flex-auto flex-col pt-[64px] pl-[200px]'>
        <div className='w-full flex-auto flex-col'>
          {children}
      {/* <Footer /> */}
        </div>
      </div>
    </>
  );
}
