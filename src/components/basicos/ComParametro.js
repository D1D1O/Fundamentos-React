import React from "react";

export default function ComParametro(props){
  console.log(props)
  return(
      <div>
        <h1> {props.titulo} </h1>
        <h2> {props.subtitulo} </h2>
      </div>
  )
}