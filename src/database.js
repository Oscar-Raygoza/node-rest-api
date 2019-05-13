import chalk from 'chalk';
const log = console.log;

import MongoClient from 'mongodb';

export async function connect(){
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017',
            { useNewUrlParser: true }
        );
        const db = client.db('node-rest-api');

        log(chalk.bgWhite.black('DB is connected'));
        
        return db;
    }catch(e){
        log(chalk.red(e));
    }
}
