import dbConect from "../config/dbConfig.js";

const conn = await dbConect(process.env.CONECTION_STRING);

export async function getPosts() {
    const db = conn.db("imersao-instabite");
    const collection = db.collection("posts");
    return collection.find().toArray();
};

export async function post(newPost){
    const db = conn.db("imersao-instabite");
    const collection = db.collection("posts");
    return collection.insertOne(newPost);
};
