import {BelongsToMany, Column, DataType, HasMany, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../roles/roles.model";
import {UserRoles} from "../roles/user-roles.model";
import {Post} from "../posts/posts.model";

interface UserCreationAttr {
    email: string,
    password: string,
}

@Table({tableName:'users'})
export class User extends Model<User, UserCreationAttr>{
    @ApiProperty({example: '1', description: 'уникальный индефкатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id:number;

    @ApiProperty({example: 'email@email', description: 'почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '1111111', description: 'пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'забанен ли'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'prosto', description: 'спасил'})
    @Column({type: DataType.STRING, allowNull: true})
    banReason: string

    @BelongsToMany(()=> Role, ()=> UserRoles)
    roles: Role[]

    @HasMany(()=> Post)
    post: Post[]
}
