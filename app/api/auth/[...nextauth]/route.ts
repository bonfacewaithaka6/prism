
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { connectMongoDb } from '../../../lib/mongodb'; 

const authOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],

    callbacks: {
        async signIn({ user, account, profile, error }) {
            if (error) {
                console.error('Error during sign-in:', error);
                throw new Error('Authentication failed');
            }
    
            try {
                const client = await connectMongoDb();
                const database = client.db('register'); 
                const usersCollection = database.collection('users');
    
        
                await usersCollection.updateOne(
                    { email: user.email },
                    { $set: { ...profile, email: user.email } },
                    { upsert: true } 
                );
    
                return true; 
            } catch (err) {
                console.error('Error during signIn callback:', err);
                throw new Error('Failed to sign in');
            }
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
