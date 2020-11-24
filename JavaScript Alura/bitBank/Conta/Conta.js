

export class Conta{

    constructor(saldoInicial=0,cliente,agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo conta Diretamente");
        }
        this._saldoInicial = saldoInicial;
        this._cliente = cliente;
        this.agencia = agencia;
        this._saldo=0;
    }

    
    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    sacar(valor){
       /*let taxa = 1;
       return this._sacar(valor,taxa);*/
       throw new Error("O método Sacar da conta é Abstrato!");
    }

    _sacar(valor,taxa){
        const ValorSacado = taxa * valor;
        if(this._saldo>=ValorSacado){
            this._saldo-=ValorSacado;
            return ValorSacado;
        }
        return 0;
    }

    depositar(valor){
        if(valor>0) this._saldo+=valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}