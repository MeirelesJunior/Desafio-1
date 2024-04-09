import { MeirelesAccount } from "./MeirelesAccount";

export class PeopleAccount extends MeirelesAccount{

    private doc_id: number;

    constructor(doc_id: number, name:string, accontNumber: number){
        super(name, accontNumber, );
        this.doc_id = doc_id;
    }

    getId():number{
        return this.doc_id;
    }

}