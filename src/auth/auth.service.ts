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
    async adminSignup(dto:AuthDto){
        const hash=await argon2.hash(dto.password)
        // dto.password
        try{const user=await this.prisma.admin.create({
            data:{
                email:dto.email,
                hash,
                firstName:dto.firstName,
                lastName:dto.lastName,
                whatsapp:dto.whatsapp,
                updatedAt:dto.updatedAt
            },
        })
        // delete user.hash;
        return this.signToken(user.id, user.email,'admin')

    }
    catch(error){
        if(error instanceof PrismaClientKnownRequestError){
            if(error.code==='P2002'){
                throw new ForbiddenException('email is already taken')
            }
        }
    }
    }
    async clientSignup(dto:AuthDto,adminId:number){
        const hash=await argon2.hash(dto.password)
        
        // try{
            const user=await this.prisma.client.create({
            data:{
                email:dto.email,
                hash,
                firstName:dto.firstName,
                lastName:dto.lastName,
                whatsapp:dto.whatsapp,
                updatedAt:dto.updatedAt,
                adminId:adminId
            },
        })
        // delete user.hash;
        return this.signToken(user.id, user.email,'client')

    // }
    // catch(error){
    //     if(error instanceof PrismaClientKnownRequestError){
    //         if(error.code==='P2002'){
    //             throw new ForbiddenException('email is already taken')
    //         }
    //     }
    // }
    }
 
    

    async signin(authDto: AuthDto){
        let user:any
        let role: string
        const admin = await this.prisma.admin.findUnique({
            where : {email:authDto.email},
        })
        if(admin){
        user=admin
        role='admin'
        }
        
        const client = await this.prisma.client.findUnique({
                where : {email:authDto.email},
            })
        if(client){
            console.log({client,})
            user=client;
            role='client'
        }
        //A ameliorer

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
        return this.signToken(user.id, user.email,role)
    }
    async signToken(
        userId: number,
        email: string,
        role: string
      ): Promise<{access_token: string}> {
        const payload = {
          sub: userId,
          email,
          role:role,
        };
        const secret = this.config.get('JWT_SECRET');
    
        const token =await this.jwt.signAsync(
          payload,
          {
            expiresIn: '150m',
            secret: secret,
          },
        );
    
        return {access_token: token};
      }
    
}
