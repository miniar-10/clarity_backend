import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LanguageService {
constructor(private prisma: PrismaService){}

  async create(createLanguageDto: CreateLanguageDto) {
    return await this.prisma.language.create({
      data:{
        name: createLanguageDto.name,
      }
    });
  }

  async findAll() {
    return await this.prisma.language.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.language.findUnique({where:{id}});
  }

  async update(id:number, updateLanguageDto: UpdateLanguageDto) {
    return await this.prisma.language.update({
      where:{id},
      data:{
        name: updateLanguageDto.name,
      }
    })
  }

  async remove(id: number) {
    const language= await this.prisma.language.findUnique ({
      where :{id}
    })
    //to refactor it using Prsima eror handlin use #P1012 code
    if (!language) {
      throw new NotFoundException(`language not found`);
      }
  }
}
