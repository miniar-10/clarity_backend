import { Controller,Get, UseGuards,Req } from '@nestjs/common';
import {AuthGuard} from'@nestjs/passport'
import {Request} from 'express'
@Controller('admins')
export class AdminController {
    @UseGuards(AuthGuard('jwt'))
    @Get("me")
    getMe(@Req() req: Request){
        console.log({
            user:req.user,
        })
        return req.user
    }




}