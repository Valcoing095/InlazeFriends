import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require("bcryptjs");

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService,
        private readonly jwtService: JwtService){}
    
    async login({Email,Password}:LoginDto){
        const user =  await this.userService.finfOneByEmail(Email)
        if(!user){
            throw new UnauthorizedException('No se encuentra registrado');
        }

        const isPasswordValid = await bcrypt.compare(Password,user.Password)
        if(!isPasswordValid){
            throw new UnauthorizedException('La contraseña está incorrecta'); 
        }

        const payload = {email: user.Email};

        const token = await this.jwtService.signAsync(payload)
        return {
            token,
            Email
        }
    }    

    async register(registerDto: RegisterDto){  
        const user =  await this.userService.finfOneByEmail(registerDto.Email)
        registerDto.Password = await bcrypt.hash(registerDto.Password,10)
        if(user){
            throw new BadRequestException("El Usuario ya se encuentra registrado")
        }

        return this.userService.create(registerDto)
    }


}
