import { Module } from '@nestjs/common';
import { MilestoneService } from './milestone.service';
import { MilestoneController } from './milestone.controller';

@Module({
  controllers: [MilestoneController],
  providers: [MilestoneService],
})
export class MilestoneModule {}
