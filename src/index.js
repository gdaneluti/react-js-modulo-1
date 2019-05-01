import React, { Component, Fragment } from "react";
import { render } from "react-dom";
import Button from "./Button";
import "./style.scss";
class App extends Component {
  //O estado é imutavel
  state = {
    counter: 0
  };

  //Executa na inicialização do componente
  componentDidMount() {
    //Chamadas a API para chamadas iniciais
    //Events Listeners
  }

  //Executa sempre que houver uma alteração nas props ou no estado antes
  //de executar o metodo render e ele retorna true ou false para executar o render novamente
  shouldComponentUpdate(nextProps, nextState) {}

  //Ele é executado apos a atulização do render
  componentDidUpdate(prevProps, prevState) {}

  //Fazer alguma coisa quando o componente deixa de existir
  componentWillUnmount() {
    //Limpar event listeners, por exemplo
  }

  handleClick = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  };
  //Este metodo é ob  rigatorio por extender Component
  render() {
    return (
      <Fragment>
        <h1>Hello World</h1>
        <h2>{this.state.counter}</h2>
        <Button onClick={this.handleClick}>Somar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
