import React, { Component } from "react";


class Contador extends Component {

  state = {
    numero: this.props.numeroInicial||0,
    passo: this.props.passoInicial||5,


  }

  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo
    })
  }
  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo
    })
  }
  setPasso = (evento) =>{
    this.setState({
      passo: +evento.target.value,
    })
  }

  render() {
    return (
      <div>
        <h2>Contador {this.state.numero} </h2>
        <div>
          <label htmlFor="passoInput"></label>
          <input id="passoInput" type="number" value={this.state.passo}
            onChange={this.setPasso}
          ></input>
        </div>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>


      </div>
    )
  }
}

export default Contador;