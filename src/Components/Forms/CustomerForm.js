import React, {useState, useContext} from 'react';
import Input from '../Inputs/Input';
import RentalForm from './RentalForm';
import RentalDisplay from '../RentalDisplay/RentalDisplay';
import useValidator from '../../Hooks/useValidator'
import {store} from '../../HOC/StateProvider';
import './Form.css';

export default function CarForm(props) {
    const {customersState, carsState, customerActions, statsState : {carModels}} = useContext(store);
    const {edit, close, isRenting} = props;

    const data = edit !== undefined ? {...customersState.customers[edit]} : {
       name: '',
       email: '',
       phone: '',
       rentals: [],
    }

    let {errors, validateFields} = useValidator({
        name : ['required'],
        email : ['required', 'email'],
        phone : ['required', 'number']
    })

    const [customer, setCustomer] = useState(data);
    const [renting, setRenting] = useState(null);
  
    const customerHandle = (val, key) => {
        setCustomer({
        ...customer,
        [key] : val})
    }
    const btnHandle = (action, payload) => {
        if(action === 'delete' || !validateFields(customer)) {
            if(action !== 'delete') {
                let newCustomer = {...payload}
                if(renting) {  
                  
                  newCustomer.rentals?.push(renting) ||   newCustomer.customer.rentals?.push(renting);
                }
                payload = newCustomer;
            }
            customerActions[action](payload);
            close();
        }
        
    }

    let rental = null;

    if(isRenting) {
        let rentalInfo = customer.rentals[customer.rentals.length - 1];
        rental = {
            car: carsState.cars[rentalInfo.carId],
            info: rentalInfo,
        }
    }
   
    return <div className="h-100 w-100 font-m flex relative">
            <div className="h-100 w-50 flex col ait-center">
                <div className="group-1 flex ait-center bold">
                    <h3 className="w-100 bdr-bottom">CUSTOMER</h3>
                </div>
                <div className="group-1">
                    <Input 
                        errors={errors['name']} 
                        onChange={(e)=> customerHandle(e.target.value, 'name')} 
                        type="text" value={customer.name} 
                        name="Full name"/>
                </div>
                <div className="group-1">
                    <Input 
                        errors={errors['email']} 
                        onChange={(e)=> customerHandle(e.target.value, 'email')} 
                        type="email" 
                        value={customer.email} 
                        name="Email"/>
                </div>
                <div className="group-1">
                    <Input 
                        errors={errors['phone']} 
                        onChange={(e)=> customerHandle(e.target.value, 'phone')} 
                        placeholder="0644587456" 
                        type="text" 
                        value={customer.phone} 
                        name="Phone"/>
                </div>
            </div>
            <div className="h-100 w-50">
               
                {isRenting ? 
                    <RentalDisplay {...rental}  /> :
                    <RentalForm 
                        cars={carsState.cars}
                        carModelCount = {carModels}
                        customer = {customer}
                        setRenting = {setRenting}
                     />
                }
            </div>
            {edit ? 
                <div className="flex-c w-50 h-15 btn-wrap">
                    <button 
                        onClick={()=> btnHandle('edit', {id: edit, customer:customer})} 
                        type="button" 
                        className="form-btn" >
                            {'EDIT'}
                    </button>
                    <button 
                        onClick={()=> btnHandle('delete', edit)} 
                        type="button" 
                        className="form-btn" >
                            {'DELETE'}
                    </button>
                </div> :
                <div className="flex-c w-50 h-15 btn-wrap">
                    <button 
                        onClick={()=> btnHandle('add', customer)} 
                        type="button" 
                        className="form-btn" >
                            {'ADD'}
                    </button>
                </div>
            }
           
         </div>
}