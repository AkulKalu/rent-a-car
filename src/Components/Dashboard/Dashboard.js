import React from 'react';
import CtrlBtn from '../CtrlBtn/CtrlBtn';
import Avatar from '../SVG/Avatar';
import Car from '../SVG/Car';
import Plus from '../SVG/Plus';



export default function Dashboard(props) {
    return <div style={{height: '90vh'}} className="h-100 font-m"  >
        <div className="h-50">
            <div  className="h-100 flex-c col w-25">
                <CtrlBtn>
                    <Avatar className="h-50"/>
                    <Plus className="h-25"/>
                </CtrlBtn>
                <span className="font-gray">add customer</span>
            </div>
        </div>
        <div className="h-50">
            <div className="h-100 flex-c col w-25">
                <CtrlBtn>
                    <Car className="h-50"/>
                    <Plus className="h-25"/>
                </CtrlBtn>
                <span className="font-gray">add cars</span>
            </div>
        </div>
    </div>
}