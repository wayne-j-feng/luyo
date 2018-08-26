import { Stop, Attraction } from './stop.model';
import { Connect } from './connect.model';

export interface Activity {
    stop: Stop;
    move: Connect;
}

export class Visiting implements Activity {
    stop: Attraction;
    move: Connect;
}

export class Hopping implements Activity {
    stop: Stop;
    move: Connect;
}