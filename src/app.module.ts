import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getDefaultConnection } from './database/connections';
import { UsersModule } from './modules/user/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(getDefaultConnection()),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
