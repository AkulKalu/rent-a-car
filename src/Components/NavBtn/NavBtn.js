import React from 'react';
import './NavBtn.css'

export default function NavBtn(props) {
    let {active } = props;
    let cls = 'h-100  flex-c col nav-btn';

    return <div onClick = {props.onClick} className={active ? cls.concat(cls, ' nav-active'): cls}>
        {props.children}
        <span>{props.name}</span>
    </div>
}