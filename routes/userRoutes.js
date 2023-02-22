import express from "express";
import {
    getUser,
    getUserById,
    saveUser,
    updateUser,
    deleteUser
} from "../controller/userController.js";

const userRoutes = express.Router();

userRoutes.get('/user', getUser);
userRoutes.get('/userById/:id', getUserById);
userRoutes.post('/saveUser', saveUser);
userRoutes.patch('/updateUser/:id', updateUser);
userRoutes.delete('/deleteUser/:id', deleteUser);

export default userRoutes;