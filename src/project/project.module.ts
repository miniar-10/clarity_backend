import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { LanguageModule } from './language/language.module';
import { ProjectLanguageModule } from './project-language/project-language.module';


@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
  imports: [LanguageModule, ProjectLanguageModule],
})
export class ProjectModule {}
