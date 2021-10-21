import { Body, ConsoleLogger, Controller, Get, Param, Put, Query } from '@nestjs/common';
import { filter } from 'rxjs';
import { AppService } from './app.service';
import { GameLevel } from './Enums';
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
  getHighScoreArrayPart(@Param('count') count : number){
    this.highScoreService.sort();
    return this.highScoreService.arr_HighScore.slice(0,count);
  }


  /**Sorts the Array and retruns the first few (count) elements
   * which have the same GameLevel as filter
   * 
   * @param count number of Elements to return
   * @param filter Filters by this value only these are included
   * @returns 
   */
  @Get('/highscore/:count/:filter')
  getHighScoreArrayPartWithFilter(@Param('count') count : number, @Param('filter') filter : GameLevel){
    this.highScoreService.sort();
    return this.highScoreService.arr_HighScore.filter(highScore => highScore.gameLevel == filter).slice(0,count);
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
