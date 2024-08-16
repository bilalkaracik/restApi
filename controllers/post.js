const PostSchema = require('../models/post.js');

const createPosts = async(req, res) =>{
  try {
    const newPost = await PostSchema.create(req.body)
    return res.status(201).json({
      neWPost})
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}


const getPosts = async(req, res) =>{
  try {
    const newPost = await PostSchema.find(req.body)
    return res.status(200).json({
      getPosts})
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

const getDetail = async(req, res) =>{
  try {
    const {id} = req.params;
    const detailPost = await PostSchema.findById(id)
    return res.status(200).json({
      detailPost})
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

const getUpdate = async(req, res) =>{
  try {
    const {id} = req.params;
    const updatePost = await PostSchema.findByIdAndUpdate(id, req.bod, {new: true})
    return res.status(200).json({
      updatePost})
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

const deletePost = async(req, res) =>{
  try {
    const {id} = req.params;
    const newPost = await PostSchema.findByIdAndRemove(id)
    return res.status(201).json({
      message:"Silme isleminiz basarili..."})
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}

const searchPost = async (req,res) => {
  const {search, tag} = req.query;
  try {
    const title = new RegExp(search, "i")

    const posts = await PostSchema.find({$or: [{title}], tag:{$in: tag.split( ",")}})

    res.status(200).json({
      posts
    })
  } catch (error) {
    return res.status(500).json({message: error.message})
    
  }
} 

module.exports = {createPosts, getDetail, getPosts, getUpdate, deletePost, searchPost}