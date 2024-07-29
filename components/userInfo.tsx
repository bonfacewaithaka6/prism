// components/UserInfo.tsx
"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';

const UserInfo = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/'); 
    }
  }, [session, router]);

  if (!session) return <Typography>Please login for you to access our page</Typography>;

  return (
    <Box sx={{display:"inline-flex"}}>
      <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', margin: 1 }}>Welcome, {session.user?.name} <Avatar alt={session.user?.name} src={session.user?.image} sx={{ width: 25, height: 25,marginLeft:0 }} /></Typography>
      
     {/* 

<button onClick={() => signOut()}>Sign out</button>
<button onClick={() => signIn('google')}>Sign in</button> 
*/}


 
    </Box>
  );
};

export default UserInfo;
