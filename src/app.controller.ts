import { Body, ConsoleLogger, Controller, Get, Put, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { HighScore } from './highscore/HighScore';
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

  /**Sorts the all HighScores and Returns them
   * 
   * @returns Ascending Array of Highscores
   */
  @Get('/highscore')
  getHighScoreArray(){

    this.highScoreService.sort();
    return this.highScoreService.arr_HighScore;
  }

  /**Sorts the Array and retruns the first few (count) elements
   * 
   * @returns 
   */
  @Get('/highscore/:count')
  getHighScoreArrayPart(){
    this.highScoreService.sort();
    return this.highScoreService.arr_HighScore.slice(0,10);
  }

  /**Deltes the hole Array of Highscores
   * 
   * @returns 
   */
  @Get('/deleteAll')
  deleteAll(){
    this.highScoreService.deleteAll();
    return this.highScoreService.arr_HighScore;
  }

  /**pushes a Highscore in HighScore Array
   * 
   * @param body expects a HighScore
   */
  @Put('/highscore')
  addHighScore(@Body() body : HighScore){
    this.highScoreService.addHighScore(body)
  }
}
