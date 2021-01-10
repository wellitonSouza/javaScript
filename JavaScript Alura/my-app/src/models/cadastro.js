function validarCPF(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 digitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(campo) {
  if (campo.length < 4 || campo.length > 72) {
    return { valido: false, texto: "O campo deve ter entre 4 e 72 digitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCPF, validarSenha };
