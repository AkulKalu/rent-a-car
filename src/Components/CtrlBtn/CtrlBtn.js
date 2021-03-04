import React from 'react';
import './CtrlBtn.css'

export default function CtrlBtn(props) {
    return <div onClick={props.onClick} className="w-50 h-50 flex-c ctrl-btn">
       { props.children}
    </div>
}