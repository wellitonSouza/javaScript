function calcular(){
    let numero = Number(document.querySelector("input#num").value);
    let select = document.querySelector("select#seltab");

    if(numero.length == 0 ){

    }else{
        for(var num=0; num<=10; num++){
            let item = document.createElement('option');
            item.text = `${numero} X ${num} = ${numero*num}`;
            select.appendChild(item);
        }
    }
}
