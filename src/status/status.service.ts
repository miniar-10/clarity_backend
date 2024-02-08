import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StatusService {
  constructor(private prisma: PrismaService){}

  async create(createStatusDto: CreateStatusDto ) {
    return await this.prisma.status.create({
      data:{
        name: createStatusDto.name,
      }
    });
  }

  async findAll() {
    return await this.prisma.status.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.status.findUnique({where:{id}});
  }

  async update(id:number, updateStatusDto:UpdateStatusDto ) {
    return await this.prisma.status.update({
      where:{id},
      data:{
        name: updateStatusDto.name,
      }
    })
  }

  async remove(id: number) {
    const status= await this.prisma.status.findUnique ({
      where :{id}
    })
    //to refactor it using Prsima eror handlin use #P1012 code
    if (!status) {
      throw new NotFoundException(`status not found`);
      }
  }
}
