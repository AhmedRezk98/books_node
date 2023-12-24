const connect = require("../database/db");
const book = require("../models/Book");
exports.index = async(req,res)=>{
    const books = book.find();
    res.json(books);}
exports.create = async(req,res)=>{
    
    await book.create(req.body);
    res.status(201).json({data:"book is stored"});
}
exports.show = async(req,res)=>
{
    const id = req.params.id;
    const book = await book.find({_id : ObjectID(id)});
    res.json(book);

}
exports.update = async(req,res)=>{
    const _id = ObjectID(req.params.id);
    
    await book.updateOne({_id},{$set:req.body});
    res.json({data:"book is updated"}); 
}
exports.delete = async (req,res)=>{
    const _id = ObjectID(req.params.id);
    await book.deleteOne({_id});
    res.json({data:"book is deleted"});
}