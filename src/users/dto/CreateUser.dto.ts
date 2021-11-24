import {ApiProperty} from "@nestjs/swagger";
import {IsEmail, IsString, Length} from "class-validator";

export class CreateUserDto{
    @ApiProperty({example: 'email@email', description: 'почта'})
    @IsString({message:'Должно быть строкой'})
    @IsEmail({},{message:'некорректный email'})
    readonly email: string;

    @ApiProperty({example: 'пароль', description: 'пароль'})
    @IsString({message:'Должно быть строкой'})
    @Length(4, 16, {message:'не меньше 4 и не больше 16'})
    readonly password: string;
}
