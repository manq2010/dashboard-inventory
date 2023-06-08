"use client"

import { useCallback, useEffect, useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid';
import { ChevronUpDownIcon } from '@heroicons/react/24/solid';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/material';

import {
    Box,
    Button,
    Divider,
    Drawer,
    Stack,
    SvgIcon,
    Typography,
    useMediaQuery
  } from '@mui/material';
import { Scrollbar } from './ScrollBar';

export default function SideNav() {
    const theme = useTheme();
  const [openSide, setOpenSide] = useState(true);

  const handleDrawerOpen = () => {
    setOpenSide(true);
  };

  const handleDrawerClose = () => {
    setOpenSide(false);
  };

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  }));

  const drawerWidth = 240;


  return (
    <>
    <Drawer
    sx={{
        width: drawerWidth,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
    },
    }}
    variant="persistent"
    anchor="left"
    open={openSide}
  >
    <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon class="h-6 w-6 text-blue-500"/> : <ChevronRightIcon class="h-6 w-6 text-blue-500" />}
          </IconButton>
        </DrawerHeader>
        <Divider />
      
      </Drawer>
    </>
  );
}
