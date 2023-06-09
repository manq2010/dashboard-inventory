import Image from 'next/image';
import Link from 'next/link';
import { getInitials } from '@/app/utils/get-initials';
import { 
    Avatar, 
    Box, 
    Stack,
 } from '@mui/material';

const TOP_NAV_HEIGHT = 64;

export default function TopNav() {
  const name = getInitials('Man Quee')

  const content = (
    <>
        <Box
            component="header"
            sx={{
                backgroundColor: 'primary.dark',
                color: 'common.white',
                position: 'sticky',
                width: '100%',
                zIndex: 100
                }}
        >
        <Stack alignItems="center" direction="row" justifyContent="space-between"
        sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2
        }}
        >
            <Stack alignItems="center" direction="row" spacing={2}> 
                <Link href={"/"} className="inline-flex">
                    <Avatar sx={{ 
                        color: 'primary.dark',
                        backgroundColor: 'common.white',
                        width: 50, 
                        height: 50 
                    }}>
                        {name}
                    </Avatar>
                </Link>
            </Stack>
            <Stack alignItems="center" direction="row" spacing={3}>
                <Image
                priority
                src="/images/profile.jpeg" 
                alt="Logo" 
                width={50} 
                height={50} 
                className="flex-none rounded-lg bg-slate-100"
                />
            </Stack>
        </Stack>
    </Box>
    </>
  )

  return (
    <header>
        {content}
    </header>
  );
}