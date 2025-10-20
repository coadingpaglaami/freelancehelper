import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users')
export class User{
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column({type:'varchar',length:100})
    name!:string;

    @Column({type:'varchar',length:100,unique:true})
    email!:string;

    @Column({type:'text',nullable:true})
    password_hash!:string;
}