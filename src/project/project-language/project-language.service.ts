import { ForbiddenException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateProjectLanguageDto } from './dto/create-project-language.dto';
import { UpdateProjectLanguageDto } from './dto/update-project-language.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class ProjectLanguageService {
  
  constructor(private prisma: PrismaService){}
  
  async create(createProjectLanguageDto: CreateProjectLanguageDto) {
    try{
    return await this.prisma.projectLanguage.create({
      data:createProjectLanguageDto
    });
  }
  catch (error){
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ForbiddenException('either the project or the language dosen\'t exist')
    }
    throw error;
  }
  }

  async findAll() {
      return await this.prisma.projectLanguage.findMany();
   

  }

  async findOne(id: number) {
    try{
    return  await this.prisma.projectLanguage.findUnique({where:{id}});
  }
  catch (error){
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ForbiddenException('Sorry! We didn\t find the data you\'re looking for')
    }
    throw error;
  
  }
  }

  async update(id: number, updateProjectLanguageDto: UpdateProjectLanguageDto) {
    try{
    return await this.prisma.projectLanguage.update({where:{id}, data:updateProjectLanguageDto});
  }
  catch (error){
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ForbiddenException('either the project or the language that you are updating dosen\'t exist')
    }
    throw error;
  }
  }
  

  async remove(id: number) {
    try{
    return await this. prisma.projectLanguage.delete({where:{id}});
  }
  catch (error){
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      throw new ForbiddenException('Something went wrong ')
    }
    throw error;
  }
  
  }
}
