import {Cliente} from './Cliente.js';
import { Gerente } from './Funcionario/Gerente.js';
import { Diretor } from './Funcionario/Diretor';
import { SistemaAutenticacao } from './SistemaAutenticação.js'

//node --experimental-modules index.js

const diretor = new Diretor("Rodrigo",  1000 , 123456781 );
diretor.cadastrarSenha("12345");
const gerente = new Gerente("Tiago" , 5000, 124587531);

//const estaLogado = SistemaAutenticacao.login(diretor,"12345");