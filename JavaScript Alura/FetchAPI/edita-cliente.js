const pegaURL = new URL(window.location);

const id = pegaURL.searchParams.get('id');
const inputCPF = document.querySelector('[data-cpf]');
const inputNome = document.querySelector('[data-nome');

detalhaCliente(id).then( dados => {
    inputCPF.value = dados[0].cpf;
    inputNome.value = dados[0].nome;
})

const formEdicao = document.querySelector('[data-form]');

const mensagem = (mensagem, tipo ) => {
    const linha = document.createElement('tr');

    const alert = tipo == 'erro' ? `alert-warning` : `alert-success`;

    console.log(alert);

    const conteudoLinha = `
        <div class="alert ${alert}"  role="alert"> 
            ${mensagem}
        </div>
    `;

    linha.innerHTML = conteudoLinha;
    return linha;
}


formEdicao.addEventListener('submit', event =>{
    event.preventDefault()

    if(!validaCPF(inputCPF.value)){
        return
    }
      
    editaCliente( id, inputCPF.value, inputNome.value).then(
        resposta => {
            if(resposta.status===200){
                formEdicao.appendChild(mensagem('Cliente Editado com sucesso' , 'sucess'));
            }else{
                formEdicao.appendChild(mensagem('Erro na edição do cliente' , 'erro'));
            }
        }
    );

})