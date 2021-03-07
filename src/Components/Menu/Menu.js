import React, {useContext} from 'react';
import NavBtn from '../NavBtn/NavBtn'
import Car from '../SVG/Car';
import Avatar from '../SVG/Avatar';
import Cmd from '../SVG/Cmd';
import {store} from '../../HOC/StateProvider';



export default function Menu(props) {
   
    const {display} = useContext(store);

    let buttons = [
        {name: 'DASHBOARD', icon: Cmd},
        {name: 'CARS', icon: Car},
        {name: 'CUSTOMERS', icon: Avatar},
    ].map((btn, i) => {
        
        return <NavBtn onClick={() => display.set(i)} active = {display.state === i}  name={btn.name} key={`nav${i}`}>
            <btn.icon />
        </NavBtn>
    })
    return <div className="h-100 w-75 bold flex">
                {buttons}
            </div>
}