import React, {useState, Fragment} from 'react';
import Window from '../Window/Window';
import CustomerForm from '../Forms/CustomerForm';
import CarSvg from '../SVG/Car';
import './Customers.css';


export default function Customer(props) {
    let {data: [customerId, customer]} = props;
    
    const [window, setWindow] = useState(0);
    let lastRental = customer.rentals[customer.rentals.length- 1]
    let isRenting = lastRental && ( new Date(lastRental.expires)) > ( new Date() )

    return <Fragment> 
        <div onClick={()=> setWindow(window + 1)} className="h-25  w-100 flex customer" >
            <div className="h-100 w-25 flex-c">{customer.name}</div>
            <div className="h-100 w-25  flex-c">{customer.email}</div>
            <div className="h-100 w-25 flex-c">{customer.phone}</div>
            <div className="h-100 w-25 flex-c">{customer.rentals.length}</div>
            <div className={"h-100 w-25 flex-c" + (isRenting ? ' renting' : '')}>
            <CarSvg className="h-75" />
            </div>
        </div>
    <Window 
          title = {`EDIT/CUSTOMER`} 
          content={CustomerForm} 
          edit = {customerId}
          isRenting = {isRenting}
          show={window} 
    />
    </Fragment>
}