import { PartialType } from '@nestjs/mapped-types';
import { CreateSharedlinkDto } from './create-sharedlink.dto';

export class UpdateSharedlinkDto extends PartialType(CreateSharedlinkDto) {}
