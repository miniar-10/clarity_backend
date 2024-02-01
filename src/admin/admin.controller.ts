import { Controller,Get, UseGuards,Req, Patch, Param, Body, Delete, ForbiddenException } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import {GetAdmin} from 'src/auth/decorator'
import { Admin, Prisma } from '@prisma/client';
import { CreateClientDto } from 'src/client/dto/create-client.dto';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminService } from './admin.service';

 @UseGuards(JwtGuard) 
@Controller('admins')
export class AdminController {

    constructor(private adminService:AdminService){}

    @Get("me")
    getMe(@GetAdmin() admin: Admin, @GetAdmin('email') email: string){
        console.log({admin,})
        return admin
    }

    // @Patch(':/id')
    // editAdmin(@Param('id')id: number, @Body()createAdminDto: CreateAdminDto){
    //     return 
    //   }

    @Get(':/id')
    getClient(@Param('id')id:number){
        try{
        return this.adminService.getAdmin(+id)
        }
        catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
    }
    @Patch(':/id')
    editAdmin(@Param('id')id: number, @Body()createAdminDto: CreateAdminDto){
        try{
        return  this.adminService.editAdmin(+ id, createAdminDto)
        }
        catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
      }
    @Delete(':/id')
    deleteAdmin(@Param('id')id:number){
        try{
        return this.adminService.removeAdmin(+ id)
        } catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
    }
    @Get(':/id')
    getClients(@Param('id') id: number){
        return this.adminService.getAddedClients(id);
    }
}