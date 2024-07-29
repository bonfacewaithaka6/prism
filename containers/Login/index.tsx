"use client";
import { Box, Button, Card, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { toast } from 'react-toastify';

function LoginWrapper() {

    const router = useRouter();
    const [registerValues, setRegisterValues] = useState({ username: "", email: "", password: "" });
    const [username,setUsername] =useState();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/register", registerValues);
            if (response.data.success) {
                toast.success("Registration successful!");
                router.push("/");
                localStorage.setItem('username',response.data.username )
            } else {
                toast.error("Registration failed: " + response.data.message);
            }
        } catch (error) {
            toast.error("Registration failed: ");
        }
    };




    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            padding: "50px 200px"

        }}>
            <Card sx={{
                padding: "20px 40px"
            }}>
                <Box sx={
                    {
                        display: "flex",
                        justifyContent: "center",
                        margin: "0px 0px 20px 0px"
                    }
                }><Box>
                        <Typography variant='h4' >Login</Typography>
                        <Typography variant='h6' >Welcome !</Typography>
                    </Box>

                </Box>
                <Box>
                <form onSubmit={handleRegister}>
                        <Grid container spacing={4}>
                            <Grid item xs={12}>
                                <TextField fullWidth 
                                name='email'
                                label="email"
                                type='email'
                                placeholder='example@gmail.com'
                                value={registerValues.email}
                                onChange={(e) => setRegisterValues({ ...registerValues, email: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth 
                                name='password'
                                label='password'
                                type='password'
                                value={registerValues.password}
                                onChange={(e) => setRegisterValues({ ...registerValues, password: e.target.value })}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant='outlined'>Cancel</Button>
                                <Button variant='contained' type='submit'>Login</Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography lineHeight={2} variant='body'>Forgot password?</Typography>
                            </Grid>
                            <Grid item xs={12}>
                            <Button href="/signinAuth" variant='contained' color="secondary">Login In With  Google</Button>
                        </Grid>
                        </Grid>

                    </form>
                </Box>
            </Card>
           

        </Box>
    )
}

export default LoginWrapper