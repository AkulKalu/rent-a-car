import React, {useState} from 'react';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';
import './Form.css';




export default function RentalForm(props) {
    let currentDate = new Date();
    const [rental, setRental] = useState({
        started: formatDate(currentDate),
        expires: '',
        vehicle: '',
        customer: '',
        pricing: 0,
    })

    function formatDate (date)  {
        return date.toISOString().split('T')[0]
     }
    const rentalHandle = (val, key) => {
        setRental({
        ...rental,
        [key] : val})
    }
   
    return <div className="h-100  w-100" >
        <div className="group-1">
            <Input onChange={(e)=> rentalHandle(e.target.value, 'started')}  type="date" value= {rental.started} name="Starts at:"/>
        </div>
        <div className="group-1">
            <Input onChange={(e)=> rentalHandle(e.target.value, 'expires')} type="date" value= {rental.expires} name="Ends at:"/>
        </div>
        <div className="group-1">
            <Select 
            onChange={(e)=> rentalHandle(e.target.value, 'expires')}  
            value= {rental.vehicle} 
            options = {[]}
            name="Car type:"/>
        </div>
        <div className="group-1">
            <Select 
            onChange={(e)=> rentalHandle(e.target.value, 'expires')}  
            value= {rental.vehicle} 
            options = {[]}
            name="Car:"/>
        </div>
    </div>
}