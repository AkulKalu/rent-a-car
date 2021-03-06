import React, {useState} from 'react';
import CtrlBtn from '../CtrlBtn/CtrlBtn';
import Avatar from '../SVG/Avatar';
import Car from '../SVG/Car';
import Plus from '../SVG/Plus';
import Window from '../Window/Window';
import CarForm from '../Forms/CarForm';
import Stats from '../Stats/Stats';
import CustomerForm from '../Forms/CustomerForm';



export default function Dashboard(props) {
    const [window, setWindow] = useState({
        state : 0,
        type : null
    });

    let windowContent = {
        CUSTOMER : CustomerForm,
        CAR : CarForm
    }

    const windowHandle = type => {
        setWindow({
            state : window.state + 1,
            type : type
        })
    }
    return <div style={{height: '90vh'}} className="h-100 font-m"  >
        <Window 
            title = {`ADD ${window.type}`} 
            content={windowContent[window.type]} 
            show={window.state} >
        </Window>
        <div className="h-50 flex">
            <div  className="h-100 flex-c col w-25">
                <CtrlBtn onClick = { () => windowHandle('CUSTOMER')} >
                    <Avatar className="h-50"/>
                    <Plus className="h-25"/>
                </CtrlBtn>
                <span className="font-gray">add customer</span>
            </div>
            <div className="w-75">
                <Stats name="customers" />
            </div>
        </div>
        <div className="h-50 flex">
            <div className="h-100 flex-c col w-25">
                <CtrlBtn onClick = { () => windowHandle('CAR')} >
                    <Car className="h-50"/>
                    <Plus className="h-25"/>
                </CtrlBtn>
                <span className="font-gray">add car</span>
            </div>
            <div className="w-75">
                <Stats name="cars" />
            </div>
        </div>
    </div>
}