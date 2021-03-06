import React, {useContext} from 'react';
import Stat from './Stat';
import {store} from '../../HOC/StateProvider';
import './Stats.css';

export default function Stats(props) {

    const {statsState} = useContext(store);

    let stats = Object.entries(statsState[props.name]).map(([name, value], i) => {
        return <Stat key={`stat${i}`} name={name} value={value}  />
    })
    return <div className="w-100 h-100  flex-c col">
        <h3 className="w-75 stats-title">{props.name.toUpperCase()}</h3>
        <div className="h-75 w-100 flex-c">
        {stats}
        </div>
        
    </div>
}
