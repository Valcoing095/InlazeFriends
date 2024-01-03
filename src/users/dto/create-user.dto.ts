/* eslint-disable prettier/prettier */
import {  IsInt, IsString } from "class-validator";

export class CreateUserDto {
    @IsString()
    FullName
    @IsString()
    Age
    @IsString()
    Email
    @IsString()
    Password
    @IsInt()
    posts

}
