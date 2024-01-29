import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { AdminController } from 'src/admin/admin.controller';

@Module({
  imports:[JwtModule.register({})],
  providers: [AuthService,JwtStrategy],
  controllers: [AuthController,AdminController]
})
export class AuthModule {}
