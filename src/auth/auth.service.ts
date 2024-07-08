import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { CreateDateColumn } from 'typeorm';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService,
        private jwtService : JwtService
    ) {}

    async signIn(username: string,pass:string): Promise<any> {
        const user =  await this.usersService.findUserByEmail(username);

        if(!user) {
            throw new  UnauthorizedException("User does not exists");
        }

        if(user.password!== pass) {
            throw new UnauthorizedException("Password is not correct");
        }

        // const { password, ...result } = user;
        console.log("user logged in successfully");

        // return result;

        const payload = { sub: user.id, username: user.username, email:user.email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
}

    async signUp(username: string,email: string,pass:string): Promise<any> {
        
        
        const user = await this.usersService.create(username,email,pass);

        console.log("new user added successfully");

        return user;
    }



    
}
