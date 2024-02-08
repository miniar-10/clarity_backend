import { Body, Controller, Delete, ForbiddenException, Get, Param, Patch } from '@nestjs/common';
import { ClientService } from './client.service';
import { CreateClientDto } from './dto/create-client.dto';
import { Prisma } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';

@ApiTags("Client")
@Controller('client')
export class ClientController {
    constructor(private clientService: ClientService) {
        
    }
    // @Get("me")
    // getMe(@GetAdmin() admin: Admin, @GetAdmin('email') email: string){
    //     console.log({admin,})
    //     return admin
    // }
    @Get("all")
    getAll(){        
      return this.clientService.getAll()
    }
    @Get('/:id')
    getClient(@Param('id')id:number){
        try{
        return this.clientService.getClient(+id)
        }
        catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
        }
    }
    @Patch('/:id')
    editClient(@Param('id')id: number, @Body()createClientDto: CreateClientDto){
        try{
        return  this.clientService.editClient(+ id, createClientDto)
        }
        catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
      }
    @Delete('/:id')
    deleteClient(@Param('id')id:number){
        try{
        return this.clientService.removeClient(+ id)
        }
        catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
    }
    
}
