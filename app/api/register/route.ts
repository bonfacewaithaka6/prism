import { NextResponse } from 'next/server';
import User from '../../../src/models/userModel';
import bcrypt from 'bcryptjs';
import clientPromise from '@/app/lib/mongodb1'; 




export async function POST(req: Request) {
    const { username, email, password } = await req.json();
    console.log("req.json",username, email, password)

    try {
        const client = await clientPromise;
       const db = client.db();
        //const db = client.db('register');

        const existingUser = await db.collection('users').findOne({ email });
        console.log('existingUser',existingUser)
        if (existingUser) {
            return NextResponse.json({ success: false, message: 'Email already exists' }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword });

        await db.collection('users').insertOne(newUser);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error in POST request:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
