"use client";
import Layout from '../components/layout';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import { Typography } from '@mui/material';
import { useEffect, useState } from 'react';

const Home = () => {

 

  return (
    <Layout>

      <Grid container spacing={3} direction="row-reverse">
       
        <Grid item xs={6}>
          <Image src="https://images.pexels.com/photos/5081917/pexels-photo-5081917.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 1" width={400} height={300} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero et magna ultrices, sit amet cursus ligula aliquet.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            Vestibulum eu convallis quam. Sed nec sapien consectetur, maximus est ac, molestie sem. Nunc ultricies nunc vel felis rutrum, vel fermentum velit placerat.
          </Typography>
        </Grid>
        <Grid item xs={6} >
          <Image src="https://images.pexels.com/photos/6347733/pexels-photo-6347733.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 2" width={400} height={350} />
        </Grid>
        <Grid item xs={6}>
          <Image src="https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 3" width={400} height={350} />
        </Grid><Grid item xs={6}><Typography variant="body1">
          Proin malesuada ante ac urna rutrum, vitae volutpat justo congue. Cras at dolor et elit ultricies volutpat.
        </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1">
            Fusce fermentum libero in lorem feugiat, a efficitur orci placerat. In nec magna nec ligula vestibulum scelerisque eget vel justo.
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Image src="https://images.pexels.com/photos/26775917/pexels-photo-26775917/free-photo-of-person-photographing-city-skyscrapers.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Image 4" width={400} height={350} />

        </Grid>
      </Grid>
      
    </Layout>
  );
};

export default Home;









