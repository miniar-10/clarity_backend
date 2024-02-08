import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SharedLinkService } from './sharedlink.service';
import { CreateSharedlinkDto } from './dto/create-sharedlink.dto';
import { UpdateSharedlinkDto } from './dto/update-sharedlink.dto';

@Controller('sharedlink')
export class SharedlinkController {
  constructor(private readonly sharedlinkService: SharedLinkService) {}

  @Post("add")
  create(@Body() createSharedlinkDto: CreateSharedlinkDto) {
    return this.sharedlinkService.create(createSharedlinkDto);
  }

  @Get("all")
  findAll() {
    return this.sharedlinkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sharedlinkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSharedlinkDto: UpdateSharedlinkDto) {
    return this.sharedlinkService.update(+id, updateSharedlinkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sharedlinkService.remove(+id);
  }
}

