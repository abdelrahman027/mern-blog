import bcryptjs from 'bcryptjs';
import UserModel from "../models/user.model.js";
import { errorHandler } from '../utils/error.js';

export const signup = async (req, res, next) => {

    const { username, email, password } = req.body;
    if (username.trim().length == 0 || email.trim().length == 0 || password.trim().length == 0)
    {
        next(errorHandler(402, "all fields is required"))
    }

    const hashedPassword = bcryptjs.hashSync(password, 10)
    const newUser = new UserModel({ username, email, password: hashedPassword });
    try
    {
        await newUser.save()
        res.status(201).json({ message: "user Created Successfully" })
    } catch (error)
    {
        next(error)
    }

}