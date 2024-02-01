import { Module } from '@nestjs/common';
import { ProjectLanguageService } from './project-language.service';
import { ProjectLanguageController } from './project-language.controller';

@Module({
  controllers: [ProjectLanguageController],
  providers: [ProjectLanguageService],
})
export class ProjectLanguageModule {}
