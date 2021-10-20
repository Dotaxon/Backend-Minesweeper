import { Body, ConsoleLogger, Controller, Get, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { HighScore } from './HighScore';
import { HighscoreService } from './highscore/highscore.service';
import { MineService } from './mine/mine.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private mineService: MineService,
    private highScoreService : HighscoreService
    ) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getMineArray(@Query('rows') rows, @Query('columns') columns, @Query('mines') mines): boolean[][]{
    return this.mineService.getMineArray(rows, columns, mines);
  }

  @Get('/highscore')
  getHighScoreArray(){

    this.highScoreService.sort();
    return this.highScoreService.arr_HighScore;
  }

  @Get('/highscore/:count')
  getHighScoreArrayPart(){
    this.highScoreService.sort();
    return this.highScoreService.arr_HighScore.slice(0,10);
  }

  @Get('/highscore/deleteAll')
  deleteAll(){
    this.highScoreService.deleteAll();
    return "{}";
  }

  @Put('/highscore')
  addHighScore(@Body() body : HighScore){
    this.highScoreService.addHighScore(body)
  }
}
