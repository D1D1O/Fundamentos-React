import './App.css'
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from './components/repeticao/TabelaProdutos';
import ParouImpar from './components/condicional/ParouImpar';
import UsuarioInfo from './components/condicional/UsuarioInfo';
import DiretaPai from './components/comunicacao/DiretaPai';
import IndiretaPai from './components/comunicacao/IndiretaPai';

const rd = Math.floor(Math.random() * (700 - 10 + 1)) + 10;

export default _ =>
  <div className='App'>
    <h1>Fundamentos React</h1>

    <div className='Cards'>

    <Card titulo="#11 -Comunicação Indireta Pai" color="#f6aa3d">
        <IndiretaPai />
    </Card>

    <Card titulo="#10 -Comunicação Direta Pai" color="#413249">
        <DiretaPai />
    </Card>

    <Card titulo="#09 - Rederização Condicional Par ou Impar" color="#8c162a">
        <UsuarioInfo usuario={{nome: "Giovanny"}}/>
        <UsuarioInfo usuario={{nome: ""}}/>
    </Card>

    <Card titulo="#08 - Rederização Condicional Par ou Impar" color="#ff8c94">
        <ParouImpar numero={rd}/>
    </Card>
    
    <Card titulo="#07 - Repetição Desafio Produtos" color="#574435">
        <TabelaProdutos/>
    </Card>

    <Card titulo="#06 - Repetição Alunos" color="#715">
        <ListaAlunos/>
    </Card>

    <Card titulo="#05 - Componente com filhos" color="#7159c1">
        <Familia sobrenome="Lima">
          <FamiliaMembro nome="Giovanny"></FamiliaMembro>
          <FamiliaMembro nome="Beatriz"> </FamiliaMembro>
          <FamiliaMembro nome="Tatiana"></FamiliaMembro>
        </Familia>
    </Card>

      <Card titulo="#04 - Desafio valor aleatório" color="#977FD7">
        <Aleatorio mim={10} max={700} />
      </Card>

      <Card titulo="#02 - Com parametro" color="#2F4F80">
        <ComParametro
          titulo="Segundo Componente"
          subtitulo="Muito Legal!"
        />
      </Card>
      <Card titulo="#01 - Primeiro componente" color="#F2AE72">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
