"use client";
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Register = () => {
    const router = useRouter();
    const [registerValues, setRegisterValues] = useState({ username: "", email: "", password: "" });

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/register", registerValues);
            if (response.data.success) {
                toast.success("Registration successful!");
                router.push("/signin");
            } else {
                toast.error("Registration failed: " + response.data.message);
            }
        } catch (error) {
            toast.error("Registration failed: ");
        }
    };

    return (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "100px 200px" }}>
            <Card sx={{ padding: "20px 40px" }}>
                <Typography variant='h4'>Register</Typography>
                <form onSubmit={handleRegister}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <TextField fullWidth name='username' label="Username" required
                                value={registerValues.username} onChange={(e) => setRegisterValues({ ...registerValues, username: e.target.value })} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth name='email' label="Email" type='email' required
                                value={registerValues.email} onChange={(e) => setRegisterValues({ ...registerValues, email: e.target.value })} />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth name='password' label='Password' type='password' required
                                value={registerValues.password} onChange={(e) => setRegisterValues({ ...registerValues, password: e.target.value })} />
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant='outlined' onClick={() => router.push("/")}>Cancel</Button>
                            <Button variant='contained' type='submit'>Register</Button>
                        </Grid>
                    </Grid>
                </form>
            </Card>
        </Box>
    );
};

export default Register;
