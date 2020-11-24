import { Conta } from "./Conta/Conta.js";

export class ContaSalario extends Conta{
    constructor(cliente){
        super(0,cliente,1010)
    }

    sacar(valor){
        const taxa = 1.1;

    }
}