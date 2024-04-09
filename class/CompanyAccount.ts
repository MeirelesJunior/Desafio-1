import { MeirelesAccount } from "./MeirelesAccount";

export class CompanyAccount extends MeirelesAccount{

    constructor(name:string, accountNumber:number){
        super(name,accountNumber);
    }

    getLoan(loanAmount: number):void{
        if(this.validateStatus()){
            this.balance += loanAmount;
            console.log('Emprestimo aprovado, valor do emprestimo: ' + this.balance)
        }else{
            console.log("Não é possível fazer empréstimo. Conta inativa.");
        }
    }

}