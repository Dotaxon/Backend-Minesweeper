import { Injectable } from '@nestjs/common';
import { GameLevel } from 'src/Enums';
import { HighScore } from 'src/highscore/HighScore';

@Injectable()
export class HighscoreService {
    arr_HighScore : HighScore[] = [];
    

    /**Sorts the array (ascending)
     * 
     */
    sort(){
        this.arr_HighScore.sort((a,b)=> a.seconds - b.seconds);
    }

    addHighScore(highScore : HighScore){
        this.arr_HighScore.push(highScore);
    }

    deleteAll(){
        this.arr_HighScore = [];
    }

    createDummyData(){
        for (let index = 0; index < 10; index++) {
            this.arr_HighScore.push({'name' : 'blabla', 'seconds' : 123, 'gameLevel' :GameLevel.easy});
            this.arr_HighScore.push({'name' : 'blabla', 'seconds' : 123, 'gameLevel' :GameLevel.normal});
            this.arr_HighScore.push({'name' : 'blabla', 'seconds' : 123, 'gameLevel' :GameLevel.hard});
        }
    }
}
