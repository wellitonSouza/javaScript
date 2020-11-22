import {Cliente} from './Cliente.js';
import {ContaCorrente} from './ContaCorrente.js';

// node --experimental-modules index.js

const cliente1 = new Cliente("Ricardo",11122233309);
const contaCorrenteRicardo = new ContaCorrente(1001,cliente1);
contaCorrenteRicardo.depositar = 100;



console.log(contaCorrenteRicardo);