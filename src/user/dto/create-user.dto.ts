import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    // API property decorator
    /**
     * User name
     * @example "John Doe"
     */
    name: string;

    @ApiProperty({
        description: "User's email",
        example: "ermesson@hotmail.com"
    })
    email: string;

     /**
     * User password
     * @example "123456"
     */
    password: string;
}
