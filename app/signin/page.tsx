
"use client";
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const SignIn = () => {
    const router = useRouter(); 
    const [signinValues, setSigninValues] = useState({ email: "", password: "" });

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/signin", signinValues);
            if (response.data.success) {
                toast.success("Login successful!");
                router.push("/"); 
            } else {
                toast.error("Login failed: " + response.data.message);
            }
        } catch (error) {
            toast.error("Login failed: ");
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
            <Card sx={{ padding: "20px 40px" }}>
                <Typography variant='h4'>Sign In</Typography>
                <form onSubmit={handleSignIn}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField fullWidth name='email' label="Email" type='email' required
                                value={signinValues.email} onChange={(e) => setSigninValues({ ...signinValues, email: e.target.value })} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth name='password' label='Password' type='password' required
                                value={signinValues.password} onChange={(e) => setSigninValues({ ...signinValues, password: e.target.value })} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='outlined' onClick={() => router.push("/")}>Cancel</Button>
                            <Button variant='contained' type='submit'>Sign In</Button>
                        </Grid>
                    </Grid>
                </form>
            </Card>
        </Box>
    );
};

export default SignIn;
