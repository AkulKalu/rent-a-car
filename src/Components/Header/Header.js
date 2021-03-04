import React from 'react';
import Menu from '../Menu/Menu';
import Logo from '../Logo/Logo';



export default function Header(props) {
    return <div className="w-100 flex header">
         <Logo />
        <Menu />
       
    </div>
}