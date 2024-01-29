import { PassportStrategy } from "@nestjs/passport";
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from "passport-jwt";
import { ConfigService } from '@nestjs/config';
import { PrismaService } from "src/prisma/prisma.service";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(config: ConfigService, private prisma: PrismaService){
            super({
            secretOrKey: config.get('JWT_SECRET'),
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
        })
    }
    async validate (payload: {sub: number; email: string;}){
        const admin=await this.prisma.admin.findUnique({
            where:{
                id: payload.sub
            }
        })
        console.log(payload)
        delete admin.hash
        return admin;
    }
}



