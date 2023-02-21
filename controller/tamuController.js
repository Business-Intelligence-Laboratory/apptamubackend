import User from "../model/tamu.js";

export const getTamu = async(req, res) =>{
    try{
        const response = await User.find();
        res.status(200).json(response);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getTamuById = async(req, res) =>{
    try{
        const response = await User.findById(req.params.id);
        res.status(200).json(response);
    }
    catch(error){
        res.status(404).json({message: error.messsage});
    }
}

export const saveTamu = async(req, res) =>{
    const tamu = new User(req.body);
    try{
        const inserUser = await tamu.save();
        res.status(201).json(inserUser);
    }
    catch(error){
        res.status(400).json({message: error.messsage});
    }
}

export const updateTamu = async(req, res) =>{
    try{
        const updateUser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(updateUser);
    }
    catch(error){
        res.status(400).json({message: error.messsage});
    }
}

export const deleteTamu = async(req, res) =>{
    try{
        const deleteUser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteUser);
    }
    catch(error){
        res.status(400).json({message: error.messsage});
    }
}