export class Funcionario{
    constructor(nome,salario,cpf){
        this._nome=nome;
        this._salario=salario;
        this._cpf=cpf;
        this._bonificacao;
        this._senha;
    }

    get senha(){
        return this._senha;
    }

    cadastrarSenha(senha){
        this._senha = senha;
    }


}