import {ApiProperty} from "@nestjs/swagger";
import {IsNumber, IsString} from "class-validator";

export class CreatePostDto{
    @ApiProperty({example: 'заголовок', description: 'Обьявление'})
    @IsString({message:'Должно быть строкой'})
    readonly title: string;

    @ApiProperty({example: 'контент', description: 'ац ыаыапфу аып а ыа '})
    @IsString({message:'Должно быть строкой'})
    readonly content: string;

    @ApiProperty({example: 'айди пользователя', description: '134'})
    @IsNumber()
    readonly userId: number;
}
