import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMilestoneDto } from './dto/create-milestone.dto';
import { UpdateMilestoneDto } from './dto/update-milestone.dto';
import { ActionItem, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { Milestone } from './entities/milestone.entity';

@Injectable()
export class MilestoneService {
  //Dependency injection of PrismaService
  constructor(private prisma:PrismaService){}

  async create(createMilestoneDto: CreateMilestoneDto) {
    
    const milestone = await this.prisma.milestone.create({
      data: {
        name: createMilestoneDto.name,
        details: createMilestoneDto.details,
        order: createMilestoneDto.order,
        deadline: createMilestoneDto.deadline,
        deliveryDate: createMilestoneDto.deliveryDate,
        socre: createMilestoneDto.socre,
        // actionItems: createMilestoneDto.actionItems,
        statusId :createMilestoneDto.statusId,
      },
    })

    return milestone;
  }

  

  async findAll() {
    const milestones=await this.prisma.milestone.findMany();
    console.log({milestones,})
    return await this.prisma.milestone.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.milestone.findUnique({where: {id}});
  }

  async update(id: number, updateMilestoneDto: UpdateMilestoneDto) {
    const milestone= await this.prisma.milestone.findUnique({where: {id}})
    console.log(typeof (milestone))
    try{

      const milestone= await this.prisma.milestone.update({ where: { id }, data: {
        name: updateMilestoneDto.name,
        details: updateMilestoneDto.details,
        order: updateMilestoneDto.order,
        deadline: updateMilestoneDto.deadline,
        deliveryDate: updateMilestoneDto.deliveryDate,
        socre: updateMilestoneDto.socre,
        // actionItems: updateMilestoneDto.actionItems,
        statusId :updateMilestoneDto.statusId,

      } })

      return (milestone)
    }
    catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          // Check for foreign key constraint failure, usually P2003
          throw new NotFoundException('milestone with id '+ id+ ' dosen\'t exist')
        }
        // Re-throw the error if it's not the type we're handling
        throw error;
    }
    
    
     
    
  }

  async findActionItems(id: number){
    const milestone=this.prisma.milestone.findUnique({where: {id}})
    return(milestone.actionItems());

  }

  remove(id: number) {
    return this.prisma.milestone.delete({where: {id}});
  }
}
