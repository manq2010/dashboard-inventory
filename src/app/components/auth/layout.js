'use client'

import Image from "next/image";
import { useRouter } from 'next/navigation';
import Footer from "../shared/Footer";
import { 
    Box, 
    Typography, 
    Unstable_Grid2 as Grid 
} from '@mui/material';

export default function Layout({ children }) {
  const router = useRouter();

  return (
    <>
    {/* <TopNav />
    <div className='w-full flex-auto flex-col pt-[64px]'>
        <div className='w-full flex-auto flex-col'>
          {children}
      <Footer />
        </div>
    </div> */}

        <main className='md:col-span-6 md:offset-3 mt-5'>
            {children}
        </main>
      
     {/* <Box
      component="main"
      sx={{
        display: 'flex',
        flex: '1 1 auto'
      }}
    >
      <Grid
        container
        sx={{ flex: '1 1 auto' }}
      >
        <Grid
          xs={12}
          lg={6}
          sx={{
            backgroundColor: 'background.paper',
            display: 'flex',
            flexDirection: 'column',
            position: 'relative'
          }}
        >
          <Box
            component="header"
            sx={{
              left: 0,
              p: 3,
              position: 'fixed',
              top: 0,
              width: '100%'
            }}
          >
            <Box
              onClick={() => router.push('/')}
              sx={{
                display: 'inline-flex',
                // height: 32,
                // width: 32
              }}
            >
             <Image
            priority
            src="/images/profile.jpeg" 
            alt="Logo" 
            width={40} 
            height={40}
            className='rounded'
            />
            </Box>
          </Box>
          {children}
        </Grid>
        <Grid
          xs={12}
          lg={6}
          sx={{
            alignItems: 'center',
            background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            '& img': {
              maxWidth: '100%'
            }
          }}
        >
          <Box sx={{ p: 3 }}>
            <Typography
              align="center"
              color="inherit"
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                mb: 1
              }}
              variant="h1"
            >
              Welcome to{' '}
              <Box
                component="a"
                sx={{ color: '#15B79E' }}
                target="_blank"
              >
                Inventory Management
              </Box>
            </Typography>
            <Typography
              align="center"
              sx={{ mb: 3 }}
              variant="subtitle1"
            >
              An inventory management platform.
            </Typography>
            <Image
            priority
            src="/images/profile.jpeg" 
            alt="Logo" 
            width={40} 
            height={40}
            className='rounded'
            />
          </Box>
        </Grid>
      </Grid>
      <Footer />
    </Box> */}
    </>
  );
}
