import { Injectable } from '@nestjs/common';

@Injectable()
export class MineService {


    getMineArray(rows: number, columns:number, mines: number) : boolean[][]{
        
        if(mines >= rows*columns) return [];
        let arr_Mines : boolean[][] = [];
    

        //initialization of arr_Mines
        for (let i = 0; i < rows; i++) {
            arr_Mines[i] = [];
            for (let j = 0; j < columns; j++) {
                arr_Mines[i][j] = false;   
            }
        }
    

        //Genrate Random Cordinates at wich place the array will be true
        //if the positon is already true it will generate new Cordinates as long as necessary
        for (let i = 0 ; i < mines; i++){
            let xCord : number;
            let yCord : number;

            do {
                xCord = this.getRandomInt(0,columns);
                yCord = this.getRandomInt(0,rows);

            } while (arr_Mines[yCord][xCord] != false);

            arr_Mines[yCord][xCord] = true;
        }
    
    
        return arr_Mines;
    }


    /**Generates A random number between min(inclusiv) and max(exclusiv)
     * 
     * @param min minimal value (inclusiv)
     * @param max maximal value (exclusiv)
     * @returns Value >= min and value < max
     */
    getRandomInt(min : number, max : number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }

}
