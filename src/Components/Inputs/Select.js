import React from 'react';
import './Inputs.css';

export default function Input(props) {
    let {name, options, value, none} = props;

    let optList = options.map((opt, i) => {
        let val, option;

        if(Array.isArray(opt)) {
            [val, option] = opt;
        }else {
            [val, option] = [opt, opt];
        }
        
        return <option key={`opt${i}`} value={val}>{option}</option>
    })

    return <div className="h-100 w-100 flex col" >
        <label className="label" htmlFor={name}>{name}</label>
        <select className="input select" onChange={props.onChange}  value={value} name={name} id={name}>
            {none ?  <option  value=''>-none selected-</option> : null}
            {optList}
        </select>
    </div>
}