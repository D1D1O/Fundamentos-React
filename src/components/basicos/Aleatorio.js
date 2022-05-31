import React from "react";

export default (props)=>{
  const valorAleatorio = 
    Math.floor(Math.random() * (props.max - props.mim + 1)) + props.mim;

  return(
    <>
      <h1> <strong>{`O número alatório entre ${props.mim} e ${props.max} é :`} </strong></h1>
      <h2> {valorAleatorio} </h2>
    </>
  )
} 