{/*
     
 import { MongoClient } from 'mongodb';

//const uri = 'mongodb://localhost:27017/register'; 
//const uri ='mongodb+srv://bonfacewaithaka615:RtcAlmJDi302SO64@whinchester.893ep1m.mongodb.net/?retryWrites=true&w=majority&appName=Whinchester';
//const uri ='mongodb+srv://bonfacewaithaka615:RtcAlmJDi302SO64@whinchester.893ep1m.mongodb.net/register?retryWrites=true&w=majority&appName=Whinchester';
//const uri='mongodb+srv://bonfacewaithaka615:RtcAlmJDi302SO64@whinchester.893ep1m.mongodb.net/?retryWrites=true&w=majority&appName=Whinchester';
const uri = 'mongodb+srv://bonfacewaithaka615:RtcAlmJDi302SO64@whinchester.893ep1m.mongodb.net/register?retryWrites=true&w=majority&appName=Whinchester';

let client: MongoClient;

async function connectMongoDb() {
    if (!client) {
        client = new MongoClient(uri, {
            useNewUrlParser: true,  // Remove for newer MongoDB Node.js driver versions
            useUnifiedTopology: true // Remove for newer MongoDB Node.js driver versions
        });
        await client.connect();
        console.log('Connected to MongoDB');
    }
    return client;
}

export { connectMongoDb };

 
    */}



    
 import { MongoClient } from 'mongodb';

 const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/register'; 
 let cachedClient: MongoClient | null = null;
 
 async function connectMongoDb() {
     if (!cachedClient) {
         cachedClient = new MongoClient(uri);
         try {
             await cachedClient.connect();
             console.log('Connected to MongoDB');
         } catch (error) {
             console.error('Failed to connect to MongoDB:', error);
         }
     }
     return cachedClient;
 }
 
 export { connectMongoDb };
 


    

















