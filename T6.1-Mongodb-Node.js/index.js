const {MongoClient} = require('mongodb');

import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGO_URL;
const client = new MongoClient(url);
const  main =async () => {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connected to MongoDB");

        // Connect to the database and collection
        const db = client.db('Monge-Node');
        const collection = db.collection('Monge-Node-collection');
        collection.insertOne({name: "ali", grade: 100});
        const data = await collection.find().toArray();
        
        console.log("data are " , data);
    };
main();
console.log("Hello World");

// const { MongoClient } = require('mongodb');

// async function testMongoDBConnection(connectionString) {
//   let client;
  
//   try {
//     client = new MongoClient(connectionString, {
//       connectTimeoutMS: 5000, // 5 seconds timeout
//       serverSelectionTimeoutMS: 5000,
//     });
    
//     await client.connect();
    
//     // Test the connection with a simple command
//     await client.db().command({ ping: 1 });
//     console.log("Successfully connected to MongoDB");
//     return true;
//   } catch (error) {
//     console.error("Connection error:", error.message);
//     return false;
//   } finally {
//     if (client) {
//       await client.close();
//     }
//   }
// }


// testMongoDBConnection('url');