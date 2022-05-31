import React from "react";

import alunos from '../../data/alunos';

export default props =>{

  const lis = alunos.map(a =>{
    return <li key={a.id}>{`${a.id}) ${a.nome}-> nota: ${a.nota} `} </li>
    })

  return(
    <div>
      <ul>
        {
          lis
        }
        
      </ul>
    </div>
  )
}