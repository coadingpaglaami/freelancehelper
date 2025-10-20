import 'dotenv/config';
import 'reflect-metadata';
import express from 'express';
import userRoutes from './routes/user.route';
import authRout from './routes/auth.route';
import { AppDataSource } from './data-source';
const app = express();
const port = 4300;

console.log(process.env.DATABASE_URL);
AppDataSource.initialize().then(()=>console.log("Data Source initialized")).catch((error)=>console.log("Error during Data Source initialization",error));
app.use(express.json());
app.use("/api/user",userRoutes);
app.use("/auth",authRout);
app.get('/',(req,res)=>{
    res.send('Hello Exress with TypeScript');
})

app.listen(port,()=>{
    console.log(`Server is running at http://localhost:${port}`);
})