import React from 'react';
import './App.css';
import Tabela from './tabela';

function App() {
  const autores = [
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
  ]
  return (
    <div className="App">
      <Tabela autores= {autores}/>
    </div>
  );
}

export default App;
