"use client";
import React, { useEffect, useState } from 'react';
import { Box, Typography, Card, Grid, Button, Dialog, DialogTitle, DialogContent, DialogContentText, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import User from '../dashboard/page';

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [open, setOpen] = useState(false);


  const handleToOpen = () => {
    setOpen(true)
  }
  const handleToClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    if (!session) {
      router.push('/');
    }
  }, [session, router]);

  if (!session) {
    return (
      <Typography variant='h4' align='center'>
        Please login
      </Typography>
    );
  }



  return (
    <Box sx={{ margin: 1, textAlign: 'center' }}>
      <User />
      <Typography variant='h3'>Profile</Typography>
      <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        padding: "50px 200px"

      }}>
        <Card sx={{
          padding: "20px 200px"
        }}>
          <Box sx={
            {
              display: "block",
              justifyContent: "center",
              margin: "0px 0px 20px 0px"
            }
          }>
            <Typography variant="h6" sx={{ margin: '10px 0' }}>Welcome, {session.user?.name}</Typography>
            <Avatar alt={session.user?.name} src={session.user?.image} sx={{ width: 100, height: 100 }} />
          </Box>
          <Box sx={{ margin: '1px 0' }}>
           
            <Typography variant='h4'>Balance : $100</Typography>


          </Box>
        </Card>
      </Box>
    
    </Box>
  );
};

export default Profile;
