import React from "react";
import "./TabelaProdutos.css"
import produtos from "../../data/produtos";

export default (params)=>{
  return(
    <di className="TabelaProdutos"> 
      <h1>Tabela Produtos</h1>
      <div>

        <table border="1">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
          {
              produtos.map((p,i)=>{
                return(
                  <>
                  <tr key={p.id} className={i % 2 === 0 ? '' : 'Par'}>
                    <td>{p.nome} </td>
                    <td>{p.preco} </td>
                  </tr>
                  </>
                )
              })
            }
          </tbody>
        </table>


      </div>


    </di>


  )
}