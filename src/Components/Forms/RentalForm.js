import React, {useState} from 'react';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';
import Pricing from '../Pricing/Pricing'
import useAccountant from '../../Hooks/useAccountant'
import './Form.css';


export default function RentalForm(props) {
    const {cars, customer, setRenting , carModelCount} = props;
    const currentDate = new Date().toISOString().split('T')[0];

    const [rental, setRental] = useState({
        started: currentDate ,
        expires: '',
        type: 'economy',
        carId : '',
        discounts: {
            vip : 0,
            length : 0
        },
        priceTotal: 0,
    })

    const accountant = useAccountant(rental.expires);
 
    const rentalHandle = (val, key) => {
        let newRental = {
            ...rental,
            [key] : val
        }
        if(key === 'type') {
            newRental.carId = '';
        }
        if(newRental.expires !== '' && newRental.carId !== '') {
           
            let vipDiscount = accountant.vipDiscount(customer.rentals);
            let lengthDiscount = accountant.lengthDiscount(newRental.started, newRental.expires);
            let priceTotal = accountant.priceTotal(cars[newRental.carId].price, [vipDiscount, lengthDiscount])

            newRental.priceTotal = priceTotal;
            newRental.discounts.length = lengthDiscount;
            newRental.discounts.vip = vipDiscount;

            setRenting(newRental)
        }else {
            setRenting(null)
        }
        setRental(newRental)
    }

    const listCarsByType = () => {
        return Object.entries(cars).filter(( [id, car] ) => { 
           let rentedCount = carModelCount[id] || 0;
           return car.type === rental.type && car.available > rentedCount 
        }).map(
            ([id, car]) => [id, `${car.brand} - ${car.model}`]
         )
    }
    let pricing = <div className="h-50 bold w-75 flex-c">Set rent duration and pick a car</div>

    if(rental.expires !== '' && rental.carId !== '') {
        pricing = <Pricing 
            carPricing = {cars[rental.carId].price}
            lenDisc = {rental.discounts.length}
            vipDisc = {rental.discounts.vip}
            total = {rental.priceTotal}
        />
    }

    return <div className="flex col ait-center h-100 w-100" >
         <div className="group-1 flex ait-center bold">
            <h3 className="w-100 bdr-bottom">RENTAL</h3>
        </div>
        <div className="group-1  ">
            <Input 
                onChange={(e)=> rentalHandle(e.target.value, 'started')}  
                type="date"
                min = {currentDate}
                value= {rental.started} 
                name="Starts at:"/>
        </div>
        <div className="group-1">
            <Input 
                onChange={(e)=> rentalHandle(e.target.value, 'expires')} 
                min = {currentDate}
                type="date" 
                value= {rental.expires} 
                name="Ends at:"/>
        </div>
        <div className="group-1">
            <Select 
                onChange={(e)=> rentalHandle(e.target.value, 'type')}  
                value= {rental.type} 
                options = {['economy', 'estate', 'luxury', 'SUV', 'cargo' ]}
                name="Car type:"/>
        </div>
        <div className="group-1">
            <Select 
                none
                onChange={(e)=> rentalHandle(e.target.value, 'carId')}  
                value= {rental.carId} 
                options = {listCarsByType()}
                name="Car:"/>
        </div>
        {pricing}
    </div>
}