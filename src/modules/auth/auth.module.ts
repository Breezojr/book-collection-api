
import { Module } from '@nestjs/common';
import { UsersModule } from '../user/user.module';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './providers/auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtStrategy } from './strategies/jwt.stratergy';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret:process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    JwtStrategy
  ],
  exports: [AuthService]
})
export class AuthModule { }