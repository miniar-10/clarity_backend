import { Module } from '@nestjs/common';
import { SharedLinkService } from './sharedlink.service';
import { SharedlinkController } from './sharedlink.controller';

@Module({
  controllers: [SharedlinkController],
  providers: [SharedLinkService],
})
export class SharedlinkModule {}
