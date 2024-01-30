import { Module } from '@nestjs/common';
import { ActionItemService } from './action-item.service';
import { ActionItemController } from './action-item.controller';

@Module({
  controllers: [ActionItemController],
  providers: [ActionItemService],
})
export class ActionItemModule {}
