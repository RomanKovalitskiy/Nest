import {ApiProperty} from "@nestjs/swagger";

export class AddRoleDto{
    @ApiProperty({example: 'роль которую добавляем', description: 'admin'})
    readonly value: string;
    @ApiProperty({example: 'айди пользователя кому добавить', description: '32'})
    readonly userId: number;
}
