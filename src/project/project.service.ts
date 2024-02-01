import { ForbiddenException, Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { Language, Prisma } from '@prisma/client';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService){}
  

  async create(createProjectDto: CreateProjectDto) {
    return await this.prisma.project.create({data:createProjectDto});
  }

  async findAll() {
    return await this.prisma.project.findMany();
  }

  async findOne(id: number) {
    return await this.prisma.project.findUnique({where:{id}});
  }

  async update(id: number, updateProjectDto: UpdateProjectDto) {
    return await this.prisma.project.update({where:{id}, data:updateProjectDto});
  }

  async remove(id: number) {
    return await this.prisma.project.delete({where:{id}});
  }

  async findLanguages(id: number){
    try{
      const languages=await this.prisma.projectLanguage.findMany({where:{projectId:id}})
      let lang_names:Language[]=[]
      for (const language of languages) {
        const lang_name=await this.prisma.language.findUnique({where:{id:language.languageId}});
        // if(lang_name){
        lang_names.push(lang_name)
        // }        
      }
      return lang_names
    } 
    catch (error){
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new ForbiddenException('either the project or the language dosen\'t exist')
      }
      throw error;
    }
    }

  

  async findRessourceLnaguages(id: number){
    try{
      const ressource_languages=await this.prisma.projectLanguage.findMany({where:{projectId:id, isRessourceLanguage:true}})
      let lang_names:Language[]=[]
      for (const language of ressource_languages) {
        const lang_name=await this.prisma.language.findUnique({where:{id:language.languageId}});
        // if(lang_name){
        lang_names.push(lang_name)
        // }
        console.log(lang_name)
        
      }
      return lang_names
    } 
    catch (error){
      if (error instanceof Prisma.PrismaClientKnownRequestError) {
        throw new ForbiddenException('either the project or the language dosen\'t exist')
      }
      throw error;
    }
    }

    async findDeliverableLnaguages(id: number){
      try{
        const deliverable_languages=await this.prisma.projectLanguage.findMany({where:{projectId:id, isDeliverableLanguage:true}})
        let lang_names:Language[]=[]
        for (const language of deliverable_languages) {
          const lang_name=await this.prisma.language.findUnique({where:{id:language.languageId}});
          // if(lang_name){
          lang_names.push(lang_name)
          // }
          console.log(lang_name)
          
        }
        return lang_names
      } 
      catch (error){
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          throw new ForbiddenException('either the project or the language dosen\'t exist')
        }
        throw error;
      }
      }

  
}
