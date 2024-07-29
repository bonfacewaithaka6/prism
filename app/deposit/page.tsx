"use client";
import { Box, Button, Card, Dialog, DialogActions, DialogContent, DialogContentText, Grid, MenuItem, Select, TextField, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import User from '../dashboard/page';
import GooglePayButton from '@google-pay/button-react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function Deposit() {
    const [open, setOpen] = useState(false);
    const [depositType, setDepositType] = useState('Silver');
    const [amount] = useState(300); // Fixed amount of 300
    const [paymentMethod, setPaymentMethod] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (paymentMethod === 'GooglePay') {
            // Automatically handle Google Pay payment
            // Trigger re-render to show the button
        } else if (paymentMethod === 'Mpesa') {
            handleMpesaPayment();
        }
    }, [paymentMethod]);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleGooglePayPayment = () => {
        // This function is for additional logic if needed
    };

    const handleMpesaPayment = () => {
        // Logic for Mpesa payment
        console.log('Handling Mpesa payment...');
        toast.success('You have successfully made a deposit');
        router.push('/profile');
    };

    return (
        <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', padding: '2rem' }}>
            <User />

            <Box sx={{ maxWidth: '800px', margin: 'auto', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: 3, padding: '2rem' }}>
                <Typography variant='h4' sx={{ textAlign: 'center', marginBottom: '2rem' }}>Deposit</Typography>
                <Card sx={{ padding: '2rem', marginBottom: '2rem', boxShadow: 1 }}>
                    <Button
                        variant='contained'
                        color='primary'
                        sx={{ marginBottom: '1rem' }}
                        onClick={handleOpen}
                    >
                        Deposit
                    </Button>
                </Card>
                <Dialog open={open} onClose={handleClose} fullWidth>
                    <DialogContent>
                        <DialogContentText sx={{ marginBottom: '1rem' }}>
                            Enter the amount you wish to deposit:
                        </DialogContentText>
                        <Box component='form' noValidate autoComplete='off'>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        variant='outlined'
                                        label='Amount'
                                        fullWidth
                                        type='number'
                                        value={amount}
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Select
                                        fullWidth
                                        variant='outlined'
                                        label='Select a deposit type'
                                        value={depositType}
                                        onChange={(event) => setDepositType(event.target.value)}
                                    >
                                        <MenuItem value='Silver'>Silver</MenuItem>
                                    </Select>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Select
                                        fullWidth
                                        variant='outlined'
                                        label='Select a payment method'
                                        value={paymentMethod}
                                        onChange={(event) => setPaymentMethod(event.target.value)}
                                    >
                                        <MenuItem value='GooglePay'>Google Pay</MenuItem>
                                        <MenuItem value='Mpesa'>Mpesa</MenuItem>
                                    </Select>
                                </Grid>
                            </Grid>
                        </Box>
                        {paymentMethod === 'GooglePay' && (
                            <Box sx={{ marginTop: '2rem' }}>
                                <GooglePayButton
                                    environment="TEST"
                                    paymentRequest={{
                                        apiVersion: 2,
                                        apiVersionMinor: 0,
                                        allowedPaymentMethods: [
                                            {
                                                type: 'CARD',
                                                parameters: {
                                                    allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                                    allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                                },
                                                tokenizationSpecification: {
                                                    type: 'PAYMENT_GATEWAY',
                                                    parameters: {
                                                        gateway: 'example',
                                                        gatewayMerchantId: 'exampleGatewayMerchantId',
                                                    },
                                                },
                                            },
                                        ],
                                        merchantInfo: {
                                            merchantId: 'BCR2DN4T6XQ75TR3',
                                            merchantName: 'prism',
                                        },
                                        transactionInfo: {
                                            totalPriceStatus: 'FINAL',
                                            totalPriceLabel: 'Total',
                                            totalPrice: amount.toFixed(2),
                                            currencyCode: 'KES',
                                            countryCode: 'KE',
                                        },
                                    }}
                                    onLoadPaymentData={(paymentData) => {
                                        console.log('load payment data', paymentData);
                                        toast.success('You have successfully made a deposit');
                                        router.push('/profile');
                                    }}
                                    
                                />
                            </Box>
                        )}
                    </DialogContent>
                    <DialogActions>
                        <Button variant='contained' color='primary' onClick={handleClose}>OK</Button>
                        <Button variant='outlined' color='error' onClick={handleClose}>Cancel</Button>
                    </DialogActions>
                </Dialog>
                <img src='https://th.bing.com/th/id/OIP.htD-lWW4RIat5ViCMNfE1AEsDH?pid=ImgDet&w=185&h=123&c=7' alt='iphone_url' width={50} height={50} />
            </Box>
        </Box>
    );
}


