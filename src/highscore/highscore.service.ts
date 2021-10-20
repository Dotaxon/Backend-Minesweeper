import { Injectable } from '@nestjs/common';
import { HighScore } from 'src/HighScore';

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
}
