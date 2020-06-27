import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';
import Header from './header';
import Tabela from './tabela';

import Form from './formulario';
import PopUp from './PopUp';

class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulino',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Edmilson',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Wellington',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ],

  };

  removeAutor = index => {

    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, posAtual) => {
        console.log(index, posAtual);
        return posAtual !== index;
      }),
    });
    PopUp.exibeMensagem('error', "Autor removido com successo");
  }

  escutadorDeSubmit = autor => {
    console.log(autor);
    this.setState({ autores: [...this.state.autores, autor]})
    PopUp.exibeMensagem('success', "Auto adicionado");
  }

  render() {

    return (
      <div className="App">
        <Fragment>
          <Header/>
          <div className="container mb-10">
          <Tabela autores={this.state.autores} removeAutor={this.removeAutor} />
          <Form  escutadorDeSubmit={this.escutadorDeSubmit} />
          </div>
        </Fragment>
      </div>
    );

  }

}

export default App;
