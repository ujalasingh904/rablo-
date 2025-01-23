import User from "../models/User.js"
import { generateTokenandSetCookie } from "../utils/generateTokenandSetCookie.js"
import bcrypt from "bcryptjs" 

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;


  try {
    if (!name || !email || !password) {
      return res.status(500).json("please provide all the details");
    }
 
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json("User with this email already exist");
    }


    const hashedPassword = bcrypt.hashSync(password, 10);

    const newUser = new User({ name, email, password: hashedPassword })

    if (!newUser) {
      return res.status(500).json("new user not created");
    }

    generateTokenandSetCookie(newUser._id, res)

    await newUser.save();

    const { password: hashedPassword2, ...rest } = newUser._doc;

    res.status(200).json(rest);
  } catch (error) {
    console.log("error at register controller", error);
    res.status(500).json("Internal server error");
  }

}

export const loginUser = async (req, res) => {

  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json("please provide all the details");
    }

    const isUserExist = await User.findOne({ email });

    if (!isUserExist) {
      return res.status(500).json("User not found! please register first");
    }

    const isValidPassword =  bcrypt.compareSync(password, isUserExist.password);

    if (!isValidPassword) {
      return res.status(400).json("Invalid name or password");
    }

    generateTokenandSetCookie(isUserExist._id, res)

    const { password: hashedPassword2, ...rest } = isUserExist._doc;

    res.status(200).json(rest);
  } catch (error) {
    console.log("error at login controller", error);
    res.status(500).json("Internal server error");
  }

}

