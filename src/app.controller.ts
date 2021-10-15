import { ConsoleLogger, Controller, Get, Query } from '@nestjs/common';
import { query } from 'express';
import { AppService } from './app.service';
import { MineService } from './mine/mine.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private mineService: MineService,
    ) {}

  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getMineArray(@Query('rows') rows, @Query('columns') columns, @Query('mines') mines): boolean[][]{
    console.log("yessss")
    return this.mineService.getMineArray(rows, columns, mines);
  }
}
