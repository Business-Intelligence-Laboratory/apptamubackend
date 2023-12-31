import User from "../model/user.js";

export const getUser = async(req, res) =>{
    try{
        const response = await User.find();
        res.status(200).json(response);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
}

export const getUserById = async(req, res) =>{
    try{
        const response = await User.findById(req.params.id);
        res.status(200).json(response);
    }
    catch(error){
        res.status(404).json({message: error.messsage});
    }
}

export const saveUser = async(req, res) =>{
    const user = new User(req.body);
    try{
        const insertUser = await user.save();
        res.status(201).json(insertUser);
    }
    catch(error){
        res.status(400).json({message: error.messsage});
    }
}

export const updateUser = async(req, res) =>{
    try{
        const updateUser = await User.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(updateUser);
    }
    catch(error){
        res.status(400).json({message: error.messsage});
    }
}

export const deleteUser = async(req, res) =>{
    try{
        const deleteUser = await User.deleteOne({_id:req.params.id});
        res.status(200).json(deleteUser);
    }
    catch(error){
        res.status(400).json({message: error.messsage});
    }
}