import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Project")
@Controller('project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Post()
  create(@Body() createProjectDto: CreateProjectDto) {
    return this.projectService.create(createProjectDto);
  }

  @Get("all")
  findAll() {
    return this.projectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectService.findOne(+id);
  }

  @Get('ressource_languages/:id')
  findRessourceLanguages(@Param('id')id: string){
    return this.projectService.findRessourceLnaguages(+ id)
  }
  
  @Get('deliverable_languages/:id')
  findDliverableLanguages(@Param('id')id: string){
    return this.projectService.findDeliverableLnaguages(+id)
  }
  @Get('languages/:id')
  findLanguages(@Param ('id') id: string){
    return this.projectService.findLanguages(+id);
  }
  //TODO: Get the project milestones & action items

  @Get(':id/milestones')
  FindMilestones (@Param('id')id : string) {
    return this.projectService.findMilestones(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectDto: UpdateProjectDto) {
    return this.projectService.update(+id, updateProjectDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectService.remove(+id);
  }
}
