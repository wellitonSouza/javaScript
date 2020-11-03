function verificar(){
    
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res');

    if(fano.value.length == 0 || fano.value > ano){
        res.innerHTML = `Erro, Verifique os dados e tente novamente`;
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);        
        var genero = "";
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if(fsex[0].checked){
            genero = 'Homen';
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'imagens/criança menino.jpg');
            }else if ( idade < 21){
                //jovemg
                img.setAttribute('src', 'imagens/homem adolescente.jpg');
            }else if ( idade < 50 ){
                //Adulto
                img.setAttribute('src', 'imagens/homem adulto.jpg');
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/homem idoso.jpg');
            }
        }else{
            genero = "Mulher";
            if(idade >= 0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'imagens/criança menina.png');
            }else if ( idade < 21){
                //jovem
                img.setAttribute('src', 'imagens/mulher adolescente.jpg');
            }else if ( idade < 50 ){
                //Adulto
                img.setAttribute('src', 'imagens/mulher adulta.jpg');
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/mulher idosa.jpg');
            }
        }
        res.style.textAlign = 'center';
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}