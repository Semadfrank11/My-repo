import User from "../Models/User.model.js";
import bcrypt from "bcryptjs/dist/bcrypt";
import { tokenAccess } from "../Libs/jwt.js";

export const register = async (req,res) => {
    const {email, password, username} = req.body;
     //console.log(email, password, username);
    //res.send('/registrando')
    try{
        const passwordHash = await bcrypt.Hash(password, 10)
        const newUser = new User({
            username,
            email,
            password: passwordHash
        });
    const userSave = await newUser.save();
    const token = await tokenAccess({ id: userSave._id});
    res.cookie('token', token)
    res.status(201).json({
        id: userSave._id,
        username: userSave.username,
        email: userSave.email
    });
} catch(error) {
    res.status(500).json({ message: error.message});
}       
    }

export const login = (req,res) => res.send("Login");