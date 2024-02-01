import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LanguageService } from './language.service';
import { CreateLanguageDto } from './dto/create-language.dto';
import { UpdateLanguageDto } from './dto/update-language.dto';

@Controller('language')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Post()
  // create(@Param(':projectId') projectId: string, @Body() createLanguageDto: CreateLanguageDto) {
  create(@Body() createLanguageDto: CreateLanguageDto) {

    return this.languageService.create(createLanguageDto);
  }

  @Get()
  findAll() {
    return this.languageService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.languageService.findOne(+id);
  }
  @Patch(':id')
  update(@Param(':id') id: string, @Body() updateLanguageDto: UpdateLanguageDto) {
    return this.languageService.update(+id, updateLanguageDto);

      //restriction: can't have same value for both dto.isresource & dto.isDeliverable
      //WHY???!!
     // if ( (updateLanguageDto.isRessourceLanguage === updateLanguageDto.isDeliverableLanguage) && updateLanguageDto.isDeliverableLanguage != null )

    // return this.languageService.update(+projectId, updateLanguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.languageService.remove(+id);
  }
}
