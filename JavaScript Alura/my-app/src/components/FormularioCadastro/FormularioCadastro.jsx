import { Step, StepLabel, Stepper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import DadosEntrega from "./DadosEntrega";

import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario"

function FormularioCadastro({ aoEnviar }) {
  const [etapaAtual, setEtapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});

  useEffect(() => {
    if(etapaAtual === formularios.lenght-1){
      aoEnviar(dadosColetados);
    }
 
  })

  const formularios = [<DadosUsuario aoEnviar={coletarDados} />,
                      <DadosPessoais aoEnviar={coletarDados} />,
                      <DadosEntrega aoEnviar={coletarDados} />,
                      <Typography variant="h5" fullWidth>Obrigado pelo Cadastro!</Typography>
                    ];

  function coletarDados(dados){
    setDados({...dadosColetados,...dados})
    
    proximo();

  }

  function proximo(){
    setEtapaAtual(etapaAtual+1);
  }

  function formularioAtual(etapa){
    
    return formularios[etapa]
  }

  return <>
    <Stepper activeStep={etapaAtual}>
      <Step><StepLabel>Login</StepLabel></Step>
      <Step><StepLabel>Pessoal</StepLabel></Step>
      <Step><StepLabel>Entrega</StepLabel></Step>
      <Step><StepLabel>Finalização</StepLabel></Step>
    </Stepper>
    {formularioAtual(etapaAtual)}</>
  ;


  
  /*
 <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
       <DadosEntrega/>
  */
}

export default FormularioCadastro;
