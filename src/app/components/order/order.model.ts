import { Training } from '../trainings/trainings.model'; 

export class Order {
    id: number;
    date: Date;
    trainings: Training[]; 

    constructor(id: number, trainings: Training[], date: Date = new Date()) {
        this.id = id;
        this.trainings = trainings;
        this.date = date;
    }
}
