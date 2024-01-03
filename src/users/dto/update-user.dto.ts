/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsInt, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsString()
    @IsOptional()
    FullName
    @IsString()
    @IsOptional()
    Age
    @IsString()
    @IsOptional()
    Email
    @IsString()
    @IsOptional()
    Password
    @IsInt()
    @IsOptional()
    posts
}
