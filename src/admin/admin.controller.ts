// import { Controller,Get, UseGuards,Req, Patch } from '@nestjs/common';
// import {AuthGuard} from'@nestjs/passport'
// import {Request} from 'express'
// import { JwtGuard } from 'src/auth/guard';
// import {GetAdmin} from 'src/auth/decorator'
// import { Admin } from '@prisma/client';

// @UseGuards(JwtGuard) 
// @Controller('admins')
// export class AdminController {
//     @Get("me")
//     getMe(@GetAdmin() admin: Admin, @GetAdmin('email') email: string){
//         console.log({email,})
//         return admin
//     }

//     @Patch()
//     editUser(){
        
//     }
// }