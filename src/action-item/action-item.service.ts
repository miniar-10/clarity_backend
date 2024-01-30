import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActionItemDto } from './dto/create-action-item.dto';
import { UpdateActionItemDto } from './dto/update-action-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ActionItemService {
  //instantion of the prisma service
  constructor(private prisma: PrismaService) {}

  async create(createActionItemDto: CreateActionItemDto) {
    return this.prisma.actionItem.create({
      data: {
        name: createActionItemDto.name,
        description: createActionItemDto.description,
        milestoneId: createActionItemDto.milestoneId,
        deadline:null
        // Set other fields as necessary, based on your Prisma schema and DTO
      },
    });
  }

  async findAll() {
    const actionitems = await this.prisma.actionItem.findMany();
    if (!actionitems) {
      throw new NotFoundException(`ActionItems not found`);
    }
    return actionitems;
  }

  async findOne(id: number) {
    //create an instance of action item 
    const actionitem = await this.prisma.actionItem.findUnique({ 
      where: { id },
    });
    if (!actionitem) {
      throw new NotFoundException(`ActionItem with ID ${id} not found`);
    }
    return actionitem;
  }



  
  async update(id: number, updateActionItemDto: UpdateActionItemDto) {

   //ensure existance of item
  const actionitem = await this.prisma.actionItem.findUnique({ 
    where: { id },
  });
  if (!actionitem) {
    throw new NotFoundException(`ActionItem with ID ${id} not found`);
  }
  // //update based on updateDTO
  //   return  this.prisma.actionItem.update({
  //     where: {id},
  //     data : UpdateActionItemDto,
  //   });

   return await this.prisma.actionItem.update({
      where: {id},
      data: {
        name: updateActionItemDto.name,
        description: updateActionItemDto.description,
        milestoneId: updateActionItemDto.milestoneId,
        deadline:null
        // Set other fields as necessary, based on your Prisma schema and DTO
      },
    });
  }

  async remove(id: number) {
    //ensure existance of item
    const actionitem = await this.prisma.actionItem.findUnique({ 
      where: { id },
    });
    if (!actionitem) {
      throw new NotFoundException(`ActionItem with ID ${id} not found`);
    }
    //delete  item with #id 
    return this.prisma.actionItem.delete({
      where: { id },
    }); ;
    }
}

