let valorInput = [];
let res = document.querySelector("div#res");
function calcular(){
    let numero = Number(document.querySelector("input#num").value);
    let select = document.querySelector("select#valores");
    console.log(diferente(numero));
    if((numero && 0 && numero >= 100) || diferente(numero) ){
        res.value=' ';
    }else{
        addElement(select,numero);
        valorInput.push(numero);
        value = document.querySelector("input#num");
        res.value=' ';
        res.focus();
    }
}

function diferente(num){
    if(valorInput.indexOf(Number(num)) == -1){
        return false;
    }else{
        return true;
    }
}

function addElement(element, value){
    let item = document.createElement('option');
    item.text = `Valor ${value} adicionado.`;
    element.appendChild(item);
}

function finalizar(){
    quantidade();
    maiorValor();
    soma();
}

function quantidade(){
    res.innerHTML=`Ao todo, temos ${valorInput.length} números cadastrados`;
}

function maiorValor(){
    valor = valorInput;
    valor.sort();
    res.innerHTML += `<br>O maior valor informado é ${valor[(valor.length-1)]}`;
    res.innerHTML += `<br>O menor valor informado é ${valor[(0)]}`;
}

function soma(){
    let total = 0;
    valorInput.map( valor =>{
        total += valor;
        console.log(total);
    });
    res.innerHTML += `<br>Somando todos os valores, temos ${total}`;
    res.innerHTML += `<br>A média dos valores gitados é ${total/valorInput.length}`;
}