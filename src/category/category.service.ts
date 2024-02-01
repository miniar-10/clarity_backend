import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class CategoryService {

  constructor(private prisma: PrismaService) {}


  async create(createCategoryDto: CreateCategoryDto) {
    return await this.prisma.category.create({
      data:{
        name: createCategoryDto.name
      }
    })
  }

  async findAll() {
    return await this.prisma.category.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.category.findUnique({where: {id}});
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    try{

      return await this.prisma.category.update({
        where:{id},
        data:{
          name: updateCategoryDto.name
             }
      });

    }
    catch(error){
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Check for foreign key constraint failure, usually P2003
       if (error.code === 'P2003') {
          throw new BadRequestException('category not find');
        }
      }
      // Re-throw the error if it's not the type we're handling
      throw error;
    }
  }

  async remove(id: number) {
    try{
    return await this.prisma.category.delete({where: {id}});
    }
    catch(error){
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        // Check for foreign key constraint failure, usually P2003
       if (error.code === 'P2003') {
          throw new BadRequestException('category not find');
        }
      }
      // Re-throw the error if it's not the type we're handling
      throw error;
    }
  }
}
