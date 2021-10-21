import { GameLevel } from "src/Enums";

export interface HighScore{
    seconds : number;
    name : string;
    gameLevel : GameLevel
}