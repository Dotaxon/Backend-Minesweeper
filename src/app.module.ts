import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MineService } from './mine/mine.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MineService],
})
export class AppModule {}
