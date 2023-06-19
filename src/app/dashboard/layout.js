'use client'

import SideNav from '../../components/shared/SideNav';
import Footer from '../../components/shared/Footer';
import TopNav from '../../components/shared/TopNav';

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
