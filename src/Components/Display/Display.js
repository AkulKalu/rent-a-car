import React, {useContext} from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Cars from '../Cars/Cars';
import Customers from '../Customers/Customers';
import {store} from '../../HOC/StateProvider';



export default function Display(props) {
    const {display} = useContext(store);

    let contentCmp = [Dashboard, Cars, Customers];
    let Content = contentCmp[display.state];

    return <div style={{paddingTop: '10vh'}} >
        <Content />
    </div>
}