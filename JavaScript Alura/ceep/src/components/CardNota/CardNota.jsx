import React, { Component } from "react";
import "./estilo.css";
import { ReactComponent as DeleteSVG } from "../../assets/img/delete.svg";

class CardNota extends Component {
  apagar() {
    this.props.apagarNota(this.props.indice);
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          <DeleteSVG onClick={this.apagar.bind(this)} />
          <h4>{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.indice}</p>
      </section>
    );
  }
}

export default CardNota;
