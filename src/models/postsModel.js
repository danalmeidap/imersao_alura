import conectarAoBanco from "../config/dbConfig.js";

const conn = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getPosts() {
    const db = conn.db("imersao-instabite");
    const collection = db.collection("posts");
    return collection.find().toArray();
};
