import './App.css'
import React from 'react';
import Primeiro from './components/basicos/Primeiro';
import ComParametro from './components/basicos/ComParametro'
import Aleatorio from './components/basicos/Aleatorio';
import Card from './components/layout/Card';
import Familia from './components/basicos/Familia';
import FamiliaMembro from "./components/basicos/FamiliaMembro";
import ListaAlunos from "./components/repeticao/ListaAlunos";


export default _ =>
  <div className='App'>
    <h1>Fundamentos React</h1>

    <div className='Cards'>

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
