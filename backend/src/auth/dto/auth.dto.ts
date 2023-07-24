import { IsEmail, IsString, MinLength } from "class-validator"

export class AuthDto {
    @IsEmail()
    email: string

    @MinLength(5, {
        message: 'Не менее 5 символов'
    })
    @IsString()
    password: string

    @IsString()
    name: string
}