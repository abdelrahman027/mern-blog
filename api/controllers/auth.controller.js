import bcryptjs from 'bcryptjs';
import UserModel from "../models/user.model.js";

export const signup = async (req, res) => {

    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10)

    try
    {
        const newUser = new UserModel({ username, email, password: hashedPassword });
        if (!newUser)
        {
            res.status(500).json({ msg: 'error creating user' })
        }
        await newUser.save()
        res.status(201).json({ msg: "user Created", newUser })
    } catch (error)
    {
        res.status(601).json({ msg: "Create account fails", error })
    }

}