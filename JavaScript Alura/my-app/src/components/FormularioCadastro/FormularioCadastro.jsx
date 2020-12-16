import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [cpf, setCPF] = useState("");
  const [promocao, setPromocao] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({ nome, sobreNome, cpf, novidades, promocao });
      }}
    >
      <TextField
        onChange={(event) => {
          setNome(event.target.value);
        }}
        value={nome}
        id="nome"
        label="Nome"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
      />

      <TextField
        onChange={(event) => {
          setSobreNome(event.target.value);
        }}
        value={sobreNome}
        id="sobreNome"
        label="SobreNome"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
      />

      <TextField
        onChange={(event) => {
          setCPF(event.target.value);
        }}
        onBlur={(event) => {
          setErros(validarCPF(event.target.value));
        }}
        value={cpf}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        id="cpf"
        label="CPF"
        variant="outlined"
        size="small"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            onChange={(event) => {
              setPromocao(event.target.checked);
            }}
            name="promocoes"
            checked={promocao}
            color="primary"
          />
        }
      />

      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="novidades"
            checked={novidades}
            color="primary"
          />
        }
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
