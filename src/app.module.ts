import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MineService } from './mine/mine.service';
import { HighscoreService } from './highscore/highscore.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, MineService, HighscoreService],
})
export class AppModule {}
