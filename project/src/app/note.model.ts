export class Note{
    future: string;
    height: Number;
    weight: Number;
    date!: Date;
    bmi!: Number;


    constructor(future: string, height: Number, weight: Number, date: Date, bmi: Number){
        this.future = future
        this.height = height
        this.weight = weight
        this.date = date
        this.bmi = bmi
    
    }

}