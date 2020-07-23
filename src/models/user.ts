

export class User {
    id: number = null;
    name: string = null;
    cardNumber: number =null;
    cardType: string =null;

    constructor(name?: string){
        this.name = name;
    }
}