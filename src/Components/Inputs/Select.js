import React from 'react';
import './Inputs.css';

export default function Input(props) {
    let {name, options, value} = props;

    let optList = options.map((opt, i) => {
        return <option key={`opt${i}`} value={opt}>{opt}</option>
    })

    return <div className="h-100 w-100 flex col" >
        <label className="label" htmlFor={name}>{name}</label>
        <select className="input select" onChange={props.onChange}  value={value} name={name} id={name}>
            {optList}
        </select>
    </div>
}