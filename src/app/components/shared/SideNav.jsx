"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import {
    Box,
    ButtonBase,
    Chip,
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

const TOP_NAV_HEIGHT = 64;
const SIDE_NAV_WIDTH = 200;

export default function SideNav() {
  const pathname = usePathname();
 
  const content = (
    <>
    <Scrollbar
    forceVisible={true}
    autoHide={false}
    scrollbarMinSize={20}
    // scrollbarMaxSize={300}
    // style={{ maxHeight: 300 }}
    sx={{
      height: '75%',
      '& .simplebar-content': {
        height: '100%'
      },
      '& .simplebar-scrollbar::before': {
        background: 'neutral.400',
        transitionDelay: '1s',
      }
    }}>

      <List sx={{ width: '100%' }}>
        {items.map((item) => {
          const active = item.path ? (pathname === item.path) : false;
          
          return (
            <Link key={item.path} href={item.path}>
            <ButtonBase
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              display: 'flex',
              justifyContent: 'flex-start',
              pl: '16px',
              pr: '16px',
              py: '6px',
              textAlign: 'left',
              width: '100%'
            }}
          >
            {item.icon && (
              <Box
                component="span"
                sx={{
                  alignItems: 'center',
                  color: 'neutral.400',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  mr: 2,
                  ...(active && {
                    color: 'primary.main'
                  })
                }}
              >
                {item.icon}
              </Box>
            )}
              <Box
                component="span"
                sx={{
                  color: 'neutral.400',
                  flexGrow: 1,
                  fontSize: 16,
                  fontWeight: 500,
                  lineHeight: '24px',
                  whiteSpace: 'nowrap',
                  ...(active && {
                    color: 'primary.main'
                  })
                }}
              >
                {item.title}
              </Box>
            </ButtonBase>
            </Link>
          );
        })}
        </List>
      </Scrollbar>
      <Divider sx={{ color: 'neutral.400' }} />
      <Box
            sx={{
              alignItems: 'center',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              // m: 1,
              p: '20px',
              fontSize: 15,
              fontWeight: 500,
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                Log-out
              </Typography>
            </div>
          </Box>
    </>
  )
  
  return (
    <Drawer
      open
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: `calc(100% - ${TOP_NAV_HEIGHT}px)`,
          p: 1,
          top: TOP_NAV_HEIGHT,
          width: SIDE_NAV_WIDTH,
          zIndex: 50
        }
      }}
    >
    {content}
    </Drawer>
  );
}
