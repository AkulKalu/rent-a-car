import React, {useState} from 'react';
import NavBtn from '../NavBtn/NavBtn'
import Car from '../SVG/Car';
import Avatar from '../SVG/Avatar';
import Cmd from '../SVG/Cmd';



export default function Menu(props) {
    const [state, setState] = useState(0)
    let buttons = [
        {name: 'dashboard', icon: Cmd},
        {name: 'cars', icon: Car},
        {name: 'customers', icon: Avatar},
    ].map((btn, i) => {
        return <NavBtn onClick={() => setState(i)} active = {state === i}  name={btn.name} key={`nav${i}`}>
            <btn.icon />
        </NavBtn>
    })
    return <div className="h-100 w-75 font-m flex">
        {buttons}
    </div>
}