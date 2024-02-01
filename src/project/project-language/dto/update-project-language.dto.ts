import { PartialType } from '@nestjs/mapped-types';
import { CreateProjectLanguageDto } from './create-project-language.dto';

export class UpdateProjectLanguageDto extends PartialType(CreateProjectLanguageDto) {}
