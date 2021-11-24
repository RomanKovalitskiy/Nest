import {ApiProperty} from "@nestjs/swagger";

export class CreateRoleDto{
    @ApiProperty({example: 'ADMIN'})
    readonly value: string;
    @ApiProperty({example: 'описание'})
    readonly description: string;
}
