import React, {Fragment, useContext} from 'react';
import Customer from './Customer';
import {store} from '../../HOC/StateProvider';
import './Customers.css';




export default function Customers(props) {
    const { customersState } = useContext(store);
    let customers = Object.entries(customersState.customers).map((entry, i) => {
        return <Customer key={`customer${i}`} data = {entry}  />
    } )
    
    return <Fragment>
           <div className="w-100 flex customer-header" >
            <div className="h-100 w-25 flex-c">NAME</div>
            <div className="h-100 w-25  flex-c">EMAIL</div>
            <div className="h-100 w-25 flex-c">PHONE</div>
            <div className="h-100 w-25 flex-c">RENTALS</div>
            <div className="h-100 w-25 flex-c" >
                RENTING
            </div>
        </div>
        <div className="h-100  w-100 flex col customers" >
       
        {customers.reverse()}
    </div>
    </Fragment> 
}