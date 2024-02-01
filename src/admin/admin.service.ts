import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Injectable()
export class AdminService {
    constructor(private prisma:PrismaService){}
    async getAll(){
        return await this.prisma.admin.findMany();
    }

    async getAdmin(id: number){
        return await this.prisma.admin.findUnique({where:{id}})
    }
    async editAdmin(id: number, updateAdminDto:UpdateAdminDto){
        return await this.prisma.admin.update({where:{id}, data:updateAdminDto})
    }
    async removeAdmin(id: number){
        return await this.prisma.admin.delete({where:{id}})
    }
    async getAddedClients(id: number){
        return await this.prisma.client.findMany({where:{adminId:id}})
    }
}

