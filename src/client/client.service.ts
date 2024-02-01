import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateClientDto } from './dto/update-client.dto';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClientService {
 
    constructor(private prisma:PrismaService){}
    async getAll(){
        try{
        return await this.prisma.client.findMany();
        } catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
    }

    async getClient(id: number){
        try{
        return await this.prisma.client.findUnique({where:{id}})
        } 
        catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
    }
    async editClient(id: number, UpdateClientDto:UpdateClientDto){
        try{
        return await this.prisma.client.update({where:{id}, data:UpdateClientDto})
        } catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
    }
    async removeClient(id: number){
        try{
        return await this.prisma.client.delete({where:{id}})
        } catch (error){
            if (error instanceof Prisma.PrismaClientKnownRequestError) {
              throw new ForbiddenException('either the project or the language dosen\'t exist')
            }
            throw error;
          }
    }
}
