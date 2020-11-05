function contar(){  
    let inicio = Number(document.querySelector("input#ini").value);
    let fim = Number(document.querySelector("input#fim").value);
    let passos = Number(document.querySelector("input#pass").value);
    let res = document.querySelector("div#res");
    
    if(inicio == 0 || fim == 0 || passos == 0){
        res.innerHTML=`Impossivel de contar`;
    }else{
        res.innerHTML=`Contando: `;
        for(inicio; inicio <= fim ; inicio=inicio+passos){
            res.innerHTML+=`${inicio} \u{1F449} `;
        }
        res.innerHTML+=`\u{1F3C1}`;
    }

    
}