import React,{useState} from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

  // nome idade nerd

const [nome,setNome] = useState('?');
const [idade,setidade] = useState(0);
const [nerd,setnerd] = useState(false);


  function fi(nome, idade, nerd){
    setNome(nome);
    setidade(idade);
    setnerd(nerd);
  }
  return(
    <div>
      <div>
        <span> {nome} </span>
        <span> {idade} </span>
        <span> {nerd ? 'verdadeiro':'falso'} </span>


      </div>
    
    <IndiretaFilho qc={fi} />
      
    </div>
  )
}