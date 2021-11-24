import {BelongsTo, Column, DataType, ForeignKey, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.model";

interface PostCreationAttr {
    title: string,
    content: string,
    userId: number,
    image: string,
}

@Table({tableName:'posts'})
export class Post extends Model<Post, PostCreationAttr>{
    @ApiProperty({example: '1', description: 'уникальный индефкатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

    @ApiProperty({example: 'email@email', description: 'заголовок'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    title: string;

    @ApiProperty({example: '1111111', description: 'контент'})
    @Column({type: DataType.STRING, allowNull: false})
    content: string;

    @ApiProperty({example: 'true', description: 'изоброжение'})
    @Column({type: DataType.STRING, defaultValue: false})
    image: string;

    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER})
    userId: number;

    @BelongsTo(()=> User)
    autor: User
}
