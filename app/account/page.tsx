"use client";
import { Avatar, Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, Grid, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import User from '../dashboard/page'

export default function Account() {

    const [open, setOpen] = useState(false);

    const handleToOpen = () => {
        setOpen(true)
    }
    const handleToClose = () => {
        setOpen(false)
    }

    const handleCancel = () => {
        handleToClose()
    }

    return (
        <Box>
            <User />
            <Box sx={{ backgroundColor: 'dimgray' }}>
                <Box sx={{ margin: '2% 18%' }}>
                    <Typography variant='h3' sx={{ textAlign: 'center', margin: '2%' }}>Account</Typography>
                    <Box>
                        <Card>
                            <Avatar src='https://th.bing.com/th?id=OIP.DxdqBFLVLPcWsjkds8636QHaHf&w=248&h=251&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2' alt='' width={50} height={50} sx={{ marginLeft: '90%' }} />
                            <Box sx={{ marginLeft: '2%' }}>
                                <Typography></Typography>
                            </Box>
                            <Box sx={{ margin: '2%', }}>

                                <Typography variant='h4' >Balance : $100</Typography>


                            </Box>
                            <Box sx={{ marginLeft: '2%', marginBottom: '3%' }}>
                                <Button variant='outlined' onClick={handleToOpen}>Deposit</Button>
                            </Box>

                            <Box>
                                <Box sx={{ marginLeft: '2%', marginBottom: '10%' }}>
                                    <Box>

                                        <Button variant='outlined' onClick={handleToOpen}>Withdraw</Button>
                                    </Box>
                                </Box>

                            </Box>
                        </Card>
                    </Box>
                   

                </Box>
            </Box>
        </Box >
    )
}
