import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { ActionItemService } from './action-item.service';
import { CreateActionItemDto } from './dto/create-action-item.dto';
import { UpdateActionItemDto } from './dto/update-action-item.dto';

@Controller('projects/project-i/action-item')
export class ActionItemController {
  constructor(private readonly actionItemService: ActionItemService) {}

 
  // @Post(':milestoneid')
  @Post(':milestoneid/add')
  async create(@Param('milestoneid') milestoneId: string, @Body() createActionItemDto: CreateActionItemDto) {
    console.log("This is controller level");
    try{
    console.log(milestoneId)
    createActionItemDto.milestoneId=(+milestoneId)
    console.log(milestoneId)
    console.log(createActionItemDto.milestoneId) // Logging the name from the milestoneid
    console.log(createActionItemDto.name); // Logging the name from the DTO
    return await this.actionItemService.create(createActionItemDto);
    }
    catch(error){
      console.log(error)
    }
  }
  
/* {    "name": "ism",    "description" : "task description",    "milestoneId": "0",    "assigneeId" : "1",    "deadline": ""} */

  @Get('all')
  findAll() {
    // @Param(':milestone-id') milestoneId:string,
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
