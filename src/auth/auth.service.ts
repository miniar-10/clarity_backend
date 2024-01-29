import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService,private jwt:  JwtService, private config: ConfigService){}
    async signup(dto:AuthDto){
        const hash=await argon2.hash(dto.password)
        try{const user=await this.prisma.admin.create({
            data:{
                email:dto.email,
                hash,
            },
            // select:{
            //     id:true,
            //     email:true,
            //     createdAt:true
            // }
        })
        delete user.hash;
        return user;
    }
    catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code==='P2002'){
                throw new ForbiddenException('email is already taken')
            }
        }
    }
    }

    async signin(authDto: AuthDto){
        const user = await this.prisma.admin.findUnique({
            where : {email:authDto.email},
        })
        // wrong mail exception
        if (!user) {
            throw new ForbiddenException ('invalid credentials');
        }
        // create async password match
        const passwordMatch = await argon2.verify (user.hash,authDto.password)
        
        if (!passwordMatch) {
            throw new ForbiddenException ('Password is not correct')   
        }

        // return user 
        //delete user.hash
        //return user
        return this.signToken(user.id, user.email)
    }
    signToken(
        userId: number,
        email: string,
      ): Promise<string> {
        const payload = {
          sub: userId,
          email,
        };
        const secret = this.config.get('JWT_SECRET');
    
        const token = this.jwt.signAsync(
          payload,
          {
            expiresIn: '15m',
            secret: secret,
          },
        );
    
        return (token);
      }
    
}
