"use client";
import { signOut } from 'next-auth/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Image from 'next/image';
import UserInfo from './userInfo';
import { useRouter } from 'next/navigation';
import { AccountBalanceWallet, AttachMoney, Home, Login, MenuBook, Money, ProductionQuantityLimits, VerifiedUser } from '@mui/icons-material';
import { Menu } from '@mui/material';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#1D2B69' }}>
        <Toolbar>
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Image src="data:image/jpeg;base64,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" alt="Logo" width={70} height={60} />
            
            <Typography variant="h6" sx={{ ml: 1 }}>
              MyApp
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button color="inherit" onClick={() => router.push('/')}>
              Home <Home/>
            </Button>
            <Button color="inherit">About <MenuBook/> </Button>
            <Button color="inherit" >Products  </Button>
          </Box>
          <Button color="inherit" onClick={() => router.push('/login')}>
            Sign In <Login/>
          </Button>
          <Button color="inherit" onClick={() => router.push('/deposit')}>
            Deposit <AttachMoney/>
          </Button>
          
       {/* <Button href="/signin">Load</Button>
          <Button href="/register">End</Button>
         <Button href="/signinAuth" color="inherit">Google</Button> 
          <Button color="inherit" onClick={() => signOut()}>Logout</Button> 
          */}
          <Button color='inherit' onClick={()=>router.push('/profile')} >Profile <VerifiedUser/> </Button>
         
        </Toolbar>
      </AppBar>
      <UserInfo />
      <Container sx={{ mt: 2 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;

