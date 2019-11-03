import React, { Component } from "react";
import "./imc.css";

export default class Imc extends Component {
  constructor(props) {
    super(props);

    this.state = {
      peso: 0,
      altura: 0
    };
    this.calcular = this.calcular.bind(this);
    this.teste = this.teste.bind(this);
  }
  calcular() {
    var imc =
      10000 *
      (parseFloat(this.state.peso) /
        (parseFloat(this.state.altura) * parseFloat(this.state.altura)));
    var imcFixed = parseFloat(imc.toFixed(2));
    if (isNaN(imcFixed)) {
      imcFixed = "Insira apenas numeros.";
    }
    this.setState({ imcFixed });
  }
  teste(){
      console.log(2)
  }
  render() {
    return (
      <div className="Imc">
        <h4>Índice de massa corporal (IMC)</h4>
        <div className="divAltura">
          <input
            type="text"
            className="input"
            placeholder="Altura"
            onChange={event => {
              this.setState({ altura: event.target.value });
            }}
          ></input>
          <p>cm</p>
        </div>
        <br />
        <div className="divPeso">
          <input
            type="text"
            className="input"
            placeholder="Peso"
            onChange={event => {
              this.setState({ peso: event.target.value });
            }}
          ></input>
          <p>kg</p>
        </div>
        <br />
        <input
          className="botao"
          type="button"
          value="Converter"
          onClick={this.calcular}
        ></input>
        <h2>{this.state.imcFixed}</h2>
      </div>
    );
  }
  componentDidMount() {
    this.interval = setInterval(() => this.teste, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
}
