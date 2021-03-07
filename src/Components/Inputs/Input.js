import React from 'react';
import './Inputs.css';


export default function Input(props) {
  
    
    return <div className="w-100 flex col">
        <label className="label"  htmlFor={props.name}>{props.name}</label>
        <input className="input" {...props} id={props.name} />
        <p  className="w-100 txt-r bold invalid">{props.errors}</p>
    </div>
}