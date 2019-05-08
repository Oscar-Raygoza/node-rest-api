import MongoClient from 'mongodb';

async function connect(){
    const client = await MongoClient.connect('mongo');
}