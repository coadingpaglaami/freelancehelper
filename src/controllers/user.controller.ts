import type { Request, Response } from "express";

export const getAllUsers =(req:Request,res:Response)=>{
    res.json([
        {id:1,name:"John"},
        {id:2,name:"Doe"},
        {id:3,name:"Smith"},
        {id:4,name:"Jane"},
        {id:5,name:"Emily"}
    ])
}

export const getUserById =(req:Request,res:Response)=>{
    console.log(req);
    const {id} = req.params;
    res.json({id, name: `User ${id}`})
}