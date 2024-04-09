import { MeirelesAccount } from "./MeirelesAccount";

export class SpecialAccount extends MeirelesAccount{

    constructor(name:string, accountNumber:number){
        super(name, accountNumber);
    }

    deposit(amount:number): void {
        
        super.deposit(amount + 10);
    }
}