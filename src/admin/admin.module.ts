import { Module } from '@nestjs/common';
import { AdminController } from 'src/admin/admin.controller';
import { AdminService } from './admin.service';


@Module({
    // exports:[AdminController],
    controllers: [AdminController],
    providers: [AdminService],
    // providers: [admin],
})
export class AdminModule {

}
