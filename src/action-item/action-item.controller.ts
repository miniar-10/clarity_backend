import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActionItemService } from './action-item.service';
import { CreateActionItemDto } from './dto/create-action-item.dto';
import { UpdateActionItemDto } from './dto/update-action-item.dto';

@Controller('projects/project-i/milestone-i/action-item')
export class ActionItemController {
  constructor(private readonly actionItemService: ActionItemService) {}

 
  @Post()
  create(@Body() createActionItemDto: CreateActionItemDto) {
    console.log("This is controller level");
    console.log(createActionItemDto.name); // Logging the name from the DTO
    return this.actionItemService.create(createActionItemDto);
  }
  
/* {    "name": "ism",    "description" : "task description",    "milestoneId": "0",    "assigneeId" : "1",    "deadline": ""} */

  @Get('all')
  findAll() {
    return this.actionItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actionItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActionItemDto: UpdateActionItemDto) {
    return this.actionItemService.update(+id, updateActionItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actionItemService.remove(+id);
  }
}
