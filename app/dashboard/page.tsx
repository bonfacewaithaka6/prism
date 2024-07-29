"use client";
import React from 'react';
import { Box, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Divider, Button } from '@mui/material';
import { Dashboard as DashboardIcon, Person as PersonIcon, Event as EventIcon, Logout as LogoutIcon, People, Settings, AccountBox, Home } from '@mui/icons-material';
import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const User = () => {
  const router = useRouter();
  const { data: session } = useSession();

  
  const sidebarItems = [
    { text: 'Profile', icon: <PersonIcon />, route: '/profile' },
    { text: 'Dashboard', icon: <DashboardIcon />, route: '/dashboard' },
    { text: 'Account', icon: <AccountBox />, route: '/account' },
    { text: 'Referrals', icon: <People />, route: '/referral' },
    { text: 'Settings', icon: <Settings />, route: '/settings' }
  ];

  const navigateTo = (route) => {
    router.push(route);
  };

  const handleLogout = async () => {
    await signOut(); 
    router.push('/'); 
  };

  return (
    <Box sx={{ display: 'flex' }}>
    
      <Drawer
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: 'white',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ textAlign: 'left', mb: 1, fontWeight: 'bold' }}>
            Dashboard
          </Typography>
          <Divider />
          <List>
            {sidebarItems.map((item, index) => (
              <ListItem button key={index} onClick={() => navigateTo(item.route)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider />
        <Button sx={{marginRight:'0%',}} startIcon={<Home />} color='inherit' variant='h3' onClick={()=>router.push('/')}>
          Home
          </Button>
        <Box sx={{ p: 10 ,marginRight:'0%',}}>
       
          <Button sx={{marginRight:'0%',}} startIcon={<LogoutIcon />} color='secondary' variant='outlined' onClick={handleLogout}>
            Logout
          </Button>
        </Box>
      </Drawer>
    </Box>
  );
};

export default User;
