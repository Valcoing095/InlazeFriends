import { IsEmail, IsString } from "class-validator"

export class LoginDto{
    @IsEmail()
    Email
    @IsString()    
        Password
}