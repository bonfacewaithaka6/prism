
 import { MongoClient } from 'mongodb';


const uri = 'mongodb://localhost:27017/register' || process.env.MONGODB_URI ;
//const uri ='mongodb+srv://bonfacewaithaka615:RtcAlmJDi302SO64@whinchester.893ep1m.mongodb.net/?retryWrites=true&w=majority&appName=Whinchester';
//const uri ='mongodb+srv://bonfacewaithaka615:RtcAlmJDi302SO64@whinchester.893ep1m.mongodb.net/register?retryWrites=true&w=majority&appName=Whinchester';
//const uri='mongodb+srv://bonfacewaithaka615:RtcAlmJDi302SO64@whinchester.893ep1m.mongodb.net/?retryWrites=true&w=majority&appName=Whinchester';
//const uri = 'mongodb+srv://bonfacewaithaka615:RtcAlmJDi302SO64@whinchester.893ep1m.mongodb.net/register?retryWrites=true&w=majority&appName=Whinchester';


let clientPromise: Promise<MongoClient>;

if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
  
  let cachedClient: MongoClient;

  if (!cachedClient) {
    cachedClient = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    clientPromise = cachedClient.connect().then(() => cachedClient)
  }
}

export default clientPromise;
 