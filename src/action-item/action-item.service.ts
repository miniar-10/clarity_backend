import { BadRequestException, ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateActionItemDto } from './dto/create-action-item.dto';
import { UpdateActionItemDto } from './dto/update-action-item.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Console } from 'console';
import { Milestone } from 'src/milestone/entities/milestone.entity';
import { Prisma } from '@prisma/client';

@Injectable()
export class ActionItemService {
  //instantion of the prisma service
  constructor(private prisma: PrismaService) {}

  async create(createActionItemDto: CreateActionItemDto) {
    try{
    const actionItem= await this.prisma.actionItem.create({
      data: {
        name: createActionItemDto.name,
        description: createActionItemDto.description,
        milestoneId: createActionItemDto.milestoneId,
        deadline:createActionItemDto.deadline,
        assigneeId: createActionItemDto.assigneeId// Set other fields as necessary, based on your Prisma schema and DTO
      },
    
    })
    return actionItem;
  }
  //if milestone id isn't availble we throw this eror
  catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Check for foreign key constraint failure, usually P2003
     if (error.code === 'P2003') {
        throw new BadRequestException('Foreign key constraint failed on the field: `ActionItem_milestoneId_fkey`');
      }
    }
    // Re-throw the error if it's not the type we're handling
    throw error;
  }
  
  }
      
    
  

  async findAll() {
    const actionitems = await this.prisma.actionItem.findMany();
    // if (!actionitems) {
    //   throw new NotFoundException(`ActionItems not found`);
    // }
    return actionitems;
  }

  async findOne(id: number) {
    //create an instance of action item 
    try{
    const actionitem = await this.prisma.actionItem.findUnique({ 
      where: { id },
    });
    // if (!actionitem) {
    //   throw new NotFoundException(`ActionItem with ID ${id} not found`);
    // }
    return actionitem;
  }catch(error){
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Check for foreign key constraint failure, usually P2003
      throw new NotFoundException('action item with id '+ id+ ' dosen\'t exist')
    }
    // Re-throw the error if it's not the type we're handling
    throw error;
}
  }



  
  async update(id: number, updateActionItemDto: UpdateActionItemDto) {

   //ensure existance of item
  // const actionitem = await this.prisma.actionItem.findUnique({ 
  //   where: { id },
  // });
  // if (!actionitem) {
  //   throw new NotFoundException(`ActionItem with ID ${id} not found`);
  // }
  // //update based on updateDTO
  //   return  this.prisma.actionItem.update({
  //     where: {id},
  //     data : UpdateActionItemDto,
  //   });

   try{
    return await this.prisma.actionItem.update({
      where: {id},
      data: {
        name: updateActionItemDto.name,
        description: updateActionItemDto.description,
        milestoneId: updateActionItemDto.milestoneId,
        deadline:null
        // Set other fields as necessary, based on your Prisma schema and DTO
      },
    });}
    catch(error){
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Check for foreign key constraint failure, usually P2003
        throw new NotFoundException('action item with id '+ id+ ' dosen\'t exist')
      }
      // Re-throw the error if it's not the type we're handling
      throw error;
  }
  }

  async remove(id: number) {
    //ensure existance of item
    // const actionitem = await this.prisma.actionItem.findUnique({ 
    //   where: { id },
    // });
    // if (!actionitem) {
    //   throw new NotFoundException(`ActionItem with ID ${id} not found`);
    // }
    //delete  item with #id 
    try{
    return await this.prisma.actionItem.delete({
      where: { id },
    }); }
    catch(error){
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Check for foreign key constraint failure, usually P2003
        throw new NotFoundException('actio item with id '+ id+ ' dosen\'t exist')
      }
      // Re-throw the error if it's not the type we're handling
      throw error;
  }
    }
}

