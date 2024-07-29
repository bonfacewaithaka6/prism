
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import clientPromise from '@/app/lib/mongodb'; 

export async function POST(req: Request) {
    const { email, password } = await req.json();

    try {
        const client = await clientPromise;
        const db = client.db(); 
         //const db = client.db('register');

        const user = await db.collection('users').findOne({ email });
        if (!user) {
            return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error in POST request:', error);
        return NextResponse.json({ success: false, message: 'Internal server error' }, { status: 500 });
    }
}
