import { Router } from "express";
import { signup } from "../controllers/auth.controller";

const authRout:Router=Router();

authRout.post("/signup",signup);

export default authRout;