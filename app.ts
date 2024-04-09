import { SpecialAccount } from './class/SpecialAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { CompanyAccount } from './class/CompanyAccount';



 const account1: CompanyAccount = new CompanyAccount('Jorge,', 120787);
 const account2: PeopleAccount = new PeopleAccount(30816,'Júlio',222566);
 const account3: SpecialAccount = new SpecialAccount('Pedro',197586);

 console.log(account1);
 console.log(account2);
 console.log(account3);

 




