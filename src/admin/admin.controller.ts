import { Controller,Get, UseGuards,Req, Patch, Param, Body, Delete, ForbiddenException } from '@nestjs/common';
import { JwtGuard } from 'src/auth/guard';
import {GetAdmin} from 'src/auth/decorator'
import { Admin, Prisma } from '@prisma/client';
import { CreateAdminDto } from './dto/create-admin.dto';
import { AdminService } from './admin.service';
import { ApiBearerAuth, ApiHeader } from '@nestjs/swagger';
import { ApiTags } from '@nestjs/swagger';

// import { AdminService } from './admin.service';

 @UseGuards(JwtGuard) 
@Controller('admins')

@ApiTags('Admin')
@ApiHeader({
  name: 'Authorization',
  description: 'Some custom header',
  required: false,
})
export class AdminController {

    constructor(private adminService:AdminService){}
    // @ApiBearerAuth()
    @Get("me")
    // getMe(@GetAdmin() admin: Admin, @GetAdmin('email') email: string){
    getMe(@GetAdmin() admin: Admin){

        console.log({admin,})
        return admin
    }

    // @Patch(':/id')
    // editAdmin(@Param('id')id: number, @Body()createAdminDto: CreateAdminDto){
    //     return 
    //   }

    @Get(':/id')
    getAdmin(@Param('id')id:number){
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
    @Get('clients/:id')
    getClients(@Param('id') id: number){
        return this.adminService.getAddedClients(+id);
    }
}