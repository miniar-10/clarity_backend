import { PartialType } from '@nestjs/mapped-types';
import { CreateActionItemDto } from './create-action-item.dto';

export class UpdateActionItemDto extends PartialType(CreateActionItemDto) {}

//partialtype allows operations that modify any combination of an ActionItem's properties.