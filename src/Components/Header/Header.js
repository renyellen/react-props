import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <h1>Nome: {this.props.nome} </h1>
        <h2>Idade:{this.props.idade}</h2>
        <h2>estudando:{this.props.estudando}</h2>

        <figure>
          <img src={this.props.imagem} alt="Batata" />
        </figure>
      </div>
    );
  }
}
export default Header;
