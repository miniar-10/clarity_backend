import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from './strategy/index';
// import { JwtGuard } from './guard';

@Module({
  imports:[JwtModule.register({})],
  // providers: [AuthService,JwtStrategy],
  providers: [AuthService],

  controllers: [AuthController]
  // controllers: [AuthController,JwtGuard]

})
export class AuthModule {}
