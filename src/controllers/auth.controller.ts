import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { User } from "../entites/User";
import bcrypt from 'bcrypt';


export const signup = async (req:Request, res:Response)=>{
    const {name,email,password} = req.body;
  if(!name || !email || !password){
    return res.status(400).json({message:"Name,email and password required"})
  }
  try{
    const userRepository = AppDataSource.getRepository(User);
    const existingUser = await userRepository.findOne({where:{email}});
    if(existingUser){
        return res.status(400).json({messsage:"User already exists"});
    }

    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = userRepository.create({name,email,password_hash:hashedPassword});
    await userRepository.save(newUser);

    const { password_hash: _, ...userWithoutPassword } = newUser;
    res.status(201).json(userWithoutPassword);
  }catch(error){
    console.error("Error during signup:", error);
    res.status(500).json({message:"Internal server error"});
  }
}

  export const login = async (req:Request, res:Response)=>{
    const {email,password}= req.body;
    if(!email || !password){
        return res.status(400).json({message:"Email and password required"});
        
    }
  }