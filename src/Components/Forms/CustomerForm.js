import React, {useState, useContext} from 'react';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';
import RentalForm from './RentalForm';
import {store} from '../../HOC/StateProvider';
import './Form.css';

export default function CarForm(props) {
    const {customersState, customerActions} = useContext(store);
    const {edit, close} = props;

    const data = edit !== undefined ? {...customersState.customers[edit]} : {
       name: '',
       email: '',
       phone: '',
    }

    const [customer, setCustomer] = useState(data);

    const customerHandle = (val, key) => {
        setCustomer({
        ...customer,
        [key] : val})
    }
    const btnHandle = (action, car) => {
      customerActions[action](car);
      close();
    }

    return <div className="h-100 w-100 font-m flex relative">
            <div className="h-100 w-50 flex-c col">
                <div className="group-1">
                    <Input onChange={(e)=> customerHandle(e.target.value, 'name')} type="text" value={customer.name} name="Full name"/>
                </div>
                <div className="group-1">
                    <Input onChange={(e)=> customerHandle(e.target.value, 'email')} type="email" value={customer.email} name="Email"/>
                </div>
                <div className="group-1">
                    <Input onChange={(e)=> customerHandle(e.target.value, 'phone')} placeholder="123-456-7890" type="tel" value={customer.phone} name="Phone"/>
                </div>
            </div>
            <div className="h-100 w-50">
                <RentalForm />
            </div>
            {edit ? 
                <div className="flex-c w-50 h-15 btn-wrap">
                    <button onClick={()=> btnHandle('edit', {id: edit, customer:customer})} type="button" className="form-btn" >{'EDIT'}</button>
                    <button onClick={()=> btnHandle('delete', edit)} type="button" className="form-btn" >{'DELETE'}</button>
                </div> :
                <div className="flex-c w-50 h-15 btn-wrap">
                    <button onClick={()=> btnHandle('add', customer)} type="button" className="form-btn" >{'ADD'}</button>
                </div>
            }
           
         </div>
}