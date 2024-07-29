import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/register'; 
let cachedClient: MongoClient | null = null;

async function connectMongoDb() {
    if (!cachedClient) {
        cachedClient = new MongoClient(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        try {
            await cachedClient.connect();
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Failed to connect to MongoDB:', error.message);  // Log error message
        }
    }
    return cachedClient;
}

export { connectMongoDb };
