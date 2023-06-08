"use client"

import { useCallback, useEffect, useState }  from 'react';
import { SideNav } from '../shared/SideNav';
import { styled } from '@mui/material/styles';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH
  }
}));

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%'
});

export default function Layout({ children }) {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      {/* <SideNav
        onClose={() => setOpenNav(false)}
        open={openNav}
      /> */}

      <Header />

      <LayoutRoot>
        <LayoutContainer>
          {children}
        </LayoutContainer>
      </LayoutRoot>
      <Footer />
    </>
  );
}
