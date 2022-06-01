import React from "react";

export default props => {
const gerarIdade = ()=> parseInt(Math.random() * (20)) + 50
  return(
    <div>
        <div>Filho</div>
        <button onClick={()=>{props.qc('Didio',gerarIdade,true)}}>Enviar Informações</button>  
    </div>
  )
}