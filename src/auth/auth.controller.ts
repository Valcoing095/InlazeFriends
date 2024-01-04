/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Get, UseGuards,Header } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService:AuthService
    ){}

    @Post('login')
    login(
        @Body()
        loginDto:LoginDto
    ){
        return this.authService.login(loginDto);
    }    


    @Post('register')
    @Header('Access-Control-Allow-Origin', 'http://example.com')
    register(
        @Body() 
        registerDto:RegisterDto
        ){
        return this.authService.register(registerDto);
    }  

    @Get('profile')
    @UseGuards(AuthGuard)
    profile(){
        return this.profile;
    }
}
