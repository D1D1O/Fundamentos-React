import React from "react";
import './Card.css';

export default props =>{

  const style ={
    backgroundColor: props.color || '#008',
    borderColor:props.color || '#008'

  }

  return (
    <div className="Card" style={style}> 
        <div className="Title" > {props.titulo} </div>  
        <div className="Content" > 
          { props.children }
        </div>
        
    </div>
  )
}