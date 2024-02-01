import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProjectLanguageService } from './project-language.service';
import { CreateProjectLanguageDto } from './dto/create-project-language.dto';
import { UpdateProjectLanguageDto } from './dto/update-project-language.dto';

@Controller('project-language')
export class ProjectLanguageController {
  constructor(private readonly projectLanguageService: ProjectLanguageService) {}

  @Post()
  create(@Body() createProjectLanguageDto: CreateProjectLanguageDto) {
    return this.projectLanguageService.create(createProjectLanguageDto);
  }

  @Get()
  findAll() {
    return this.projectLanguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectLanguageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectLanguageDto: UpdateProjectLanguageDto) {
    return this.projectLanguageService.update(+id, updateProjectLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectLanguageService.remove(+id);
  }
}
