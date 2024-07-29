import Deposit from '../../../src/models/Deposit'; 
import { NextResponse } from 'next/server';
import { connectMongoDb } from '@/app/lib/mongodb_dep'; 

export async function POST(request: Request) {
    try {
        const { paymentToken, amount, depositType } = await request.json();

        if (!paymentToken || !amount || !depositType) {
            return NextResponse.json({ error: 'Invalid input' }, { status: 400 });
        }

        // Connect to MongoDB
        const client = await connectMongoDb();
        const db = client.db('register'); // Replace 'register' with your database name
        const depositsCollection = db.collection('account'); // Replace 'account' with your collection name

        // Create a new deposit record
        const result = await depositsCollection.insertOne({
            paymentToken,
            amount,
            depositType,
            createdAt: new Date(),
        });

        console.log('Insert result:', result);

        return NextResponse.json({ success: true, message: 'Payment successful' }, { status: 200 });
    } catch (error) {
        console.error('Payment error:', error.message);  // Log error message
        return NextResponse.json({ error: 'An error occurred: ' + error.message }, { status: 500 });
    }
}
