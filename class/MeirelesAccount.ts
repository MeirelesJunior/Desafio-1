/*
 Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount

Os valores dos saldos devem ser alterados, de acordo com o valor informado para depósito
Apenas contas com o status true e saldo (balance) maior que o valor solicitado podem fazer saques
 Implementar o método de empréstimo (getLoan) na classe CompanyAccount

Os valores do saldos deve ser acrescidos, de acordo com o valor informado para empréstimo
Apenas contas com o status true podem fazer empréstimo
 Criar um novo tipo de conta a partir da DioAccount

Esta conta não deve receber novos atributos
Esta conta terá um método de depósito, que acresce 10 a mais ao valor informado para depósito. (Ex: Um depósito de 100, será de 110 no final)
 Todos os atributos de qualquer conta devem ser privados

 Os atributos name e accountNumber não podem ser alterados internamente ou externamente
 Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.
  */




export abstract class MeirelesAccount {

    private  name: string;
    private readonly accountNumber: number;
    balance: number = 0;
    private status: boolean = true;

    constructor(name:string, accountNumber:number ){
        this.name = name;
        this.accountNumber = accountNumber;
        
    }


    getName():string{
        return this.name;
    }

    setName(name:string):void{
        this.name = name;
        console.log('Nome alterado com sucesso!')
    }

    
    deposit(amount:number):void {
        if(this.validateStatus()){
            this.balance += amount;
            console.log(`Depósito de ${amount} realizado com sucesso. Novo saldo: ${this.balance}`);
        }else{
            return console.log('Conta não está ativa');
        }

    }

    withdraw(amount:number):void{
        if (this.validateStatus() && this.balance >= this.balance) {
            this.balance -= amount;
            console.log(`Retirada de ${amount} realizado com sucesso. Novo saldo: ${this.balance}`);
        }else{
            console.log('Você não tem saldo suficiente para esse saque')
        }

    }

    getBalance():void{
        console.log(this.balance);
    }

    protected validateStatus():boolean{
        if(this.status ){
            return this.status;
        }

        throw new Error('Conta inválida');
    }

   
}