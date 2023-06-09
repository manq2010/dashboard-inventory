"use client"

import { usePathname } from 'next/navigation';
import {
    Box,
    Button,
    Divider,
    Drawer,
    Stack,
    SvgIcon,
    Typography,
    List, 
    ListItem, 
    ListItemIcon, 
    ListItemText 
  } from '@mui/material';
import { Scrollbar } from './ScrollBar';
import { items } from './config';
import Link from 'next/link';
import { SideNavItem } from './SideNavItem';

const TOP_NAV_HEIGHT = 64;
const SIDE_NAV_WIDTH = 160;

export default function SideNav() {
  // const pathname = usePathname();
  
  const active =  false;
  
  const content = (
    <Scrollbar 
    sx={{
      height: '100%',
      '& .simplebar-content': {
        height: '100%'
      },
      '& .simplebar-scrollbar:before': {
        background: 'neutral.400'
      }
    }}>
         <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                Devias
              </Typography>
              <Typography
                color="neutral.400"
                variant="body2"
              >
                Production
              </Typography>
            </div>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            {items.map((item) => {
              // const active = item.path ? (pathname === item.path) : false;
              
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
            })}
          </Stack>
        </Box>
        {/* <Divider sx={{ borderColor: 'neutral.700' }} /> */}
      </Box>
    </Scrollbar>
  )

  return (
    // <Drawer
    //   open
    //   variant="permanent"
    //   PaperProps={{
    //     sx: {
    //       backgroundColor: 'background.default',
    //       display: 'flex',
    //       flexDirection: 'column',
    //       height: `calc(100% - ${TOP_NAV_HEIGHT}px)`,
    //       p: 1,
    //       top: TOP_NAV_HEIGHT,
    //       width: SIDE_NAV_WIDTH,
    //       zIndex: 50
    //     }
    //   }}
    // >
    //   <List sx={{ width: '100%' }}>
    //     {items.map((item) => {
    //     //   const active = matchPath({ path: item.href, end: true }, location.pathname);
    //       return (
    //         <Link key={item.href} href={item.path}>
    //         <ListItem
    //           disablePadding
    //           sx={{
    //             flexDirection: 'column',
    //             px: 2,
    //             py: 1.5
    //           }}
    //         >
    //           <ListItemIcon
    //             sx={{
    //               minWidth: 'auto',
    //             //   color: active ? 'primary.main' : 'neutral.400'
    //             }}
    //           >
    //             {item.icon}
    //           </ListItemIcon>
    //           <ListItemText
    //             primary={item.title}
    //             primaryTypographyProps={{
    //               variant: 'caption',
    //               sx: {
    //                 // color: active ? 'primary.main' : 'text.secondary'
    //               }
    //             }}
    //           />
    //         </ListItem>
    //         </Link>
    //       );
    //     })}
    //   </List>
    // </Drawer>

    <Drawer
    anchor="left"
    // onClose={onClose}
    // open={open}
    open
    PaperProps={{
      sx: {
        backgroundColor: 'neutral.800',
        color: 'common.white',
        width: 280
      }
    }}
    sx={{ zIndex: 100 }}
    variant="temporary"
  >
    {content}
  </Drawer>

  );
}
