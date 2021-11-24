import {ApiProperty} from "@nestjs/swagger";

export class BanUserDto{
    @ApiProperty({example: 'айди пользователя', description: 'admin'})
    readonly userId: number;
    @ApiProperty({example: 'причина', description: '32'})
    readonly banReason: string;
}
