import { DataSource } from "typeorm";
import { User } from "./entites/User";

console.log(process.env.DATABASE_URL);

export const AppDataSource = new DataSource({
    type:'postgres',
    url:process.env.DATABASE_URL as string,
    synchronize:true,
    logging:true,
    entities:[User],
    migrations:[],
    subscribers:[]
})