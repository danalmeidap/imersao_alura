import { MongoClient } from 'mongodb';

export default async function dbConect(conectionString) {
    let mongoClient;

    try {
        mongoClient = new MongoClient(conectionString);
        console.log('Conecting to db cluster');
        await mongoClient.connect();
        console.log('Conected to MongoDB Atlas!');

        return mongoClient;
    } catch (error) {
        console.error('database connection failure!', error);
        process.exit();
    }
}