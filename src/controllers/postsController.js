import fs from "fs";
import { getPosts, post } from "../models/postsModel.js";


export async function listPosts(req, res) {
    const posts =  await getPosts();
    res.status(200).json(posts);
};

export async function createPost(req, res){
    const newPost = req.body;
    try{
        const createdPost = await post(newPost);
        res.status(200).json(createdPost);
    }catch(error){
        console.error(error.message);
        res.status(500).json({"Message":"Request Error"});
    };
}

export async function imageUpload(req, res) {
    const newPost = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    };

    try {
        const createdPost = await post(newPost);
        const updatedImage = `uploads/${createdPost.insertedId}.png`;
        fs.renameSync(req.file.path, updatedImage);
        res.status(200).json(createdPost);  
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Message":"Request Error"})
    }
}