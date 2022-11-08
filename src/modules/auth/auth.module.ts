
import { Module } from '@nestjs/common';
import { UsersModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './providers/auth.service';

@Module({
  imports: [UsersModule],
  controllers: [AuthController],
  providers: [AuthService]
})
export class AuthModule {}