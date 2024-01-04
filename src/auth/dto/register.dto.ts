/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from "class-validator";

export class RegisterDto{
    @IsEmail()
    Email
    
    @IsString()
    Age
    
    @IsString()
    FullName

    @IsString()    
    Password
}