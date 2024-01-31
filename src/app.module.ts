import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ClientModule } from './client/client.module';
import { AuthModule } from './auth/auth.module';
// import { AdminModule } from './admin/admin.module';

import { SoraClientModule } from './sora-client/sora-client.module';
import { ConfigModule } from '@nestjs/config';
// import { AdminModule } from './admin/admin.module';
import { ActionItemModule } from './action-item/action-item.module';
// import { ActionItemModule } from './action-item/action-item.module';
import { MilestoneModule } from './milestone/milestone.module';
import { ProjectModule } from './project/project.module';

@Module({
  // imports: [PrismaModule, ClientModule, AuthModule, SoraClientModule,ConfigModule.forRoot({isGlobal:true}), AdminModule, ActionItemModule],
  imports: [PrismaModule, ClientModule, AuthModule, SoraClientModule,ConfigModule.forRoot({isGlobal:true}), ActionItemModule, MilestoneModule, ProjectModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
