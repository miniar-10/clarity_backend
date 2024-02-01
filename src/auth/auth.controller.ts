import { Body, Controller, Logger, Param, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){}

    @Post('admin/signup')
    adminSingup(@Body() dto: AuthDto){
        console.log({
            dto,
        })
        return this.authService.adminSignup(dto)
    }

    @Post('client/register/:adminId')
    clientSignup(@Param('adminId')adminId:number ,@Body() dto: AuthDto){
        console.log({
            dto,
        })
        return this.authService.clientSignup(dto,+ adminId)
    }

    @Post("signin")
    signin(@Body() dto: AuthDto){
        return this.authService.signin(dto)
    }
}
