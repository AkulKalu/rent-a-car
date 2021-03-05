import React, {useState, useContext} from 'react';
import Input from '../Inputs/Input';
import Select from '../Inputs/Select';
import {store} from '../../HOC/StateProvider';
import './Form.css';

export default function CarForm(props) {
    const {carsState, carActions} = useContext(store);
    const {edit, close} = props;

    const data = edit !== undefined ? {...carsState.cars[edit]} : {
        brand: '',
        model: '',
        year : '',
        fuel : 'petrol',
        seats : 4,
        price : 0,
        image: '',
        available : 1,
        type : 'economy'
    }

    const [car, setCar] = useState(data);

    const carHandle = (val, key) => {
        setCar({
        ...car,
        [key] : val})
    }
    const btnHandle = (action, car) => {
      carActions[action](car);
      close();
    }

    return <div className="h-100 w-100 font-m flex relative">
            <div className="w-50 flex-c col">
                <div className="group-1">
                    <Select 
                    onChange={e => carHandle(e.target.value, 'type')} 
                    options = {['economy', 'estate', 'luxury', 'SUV', 'cargo' ]} 
                    name='Type' 
                    value={car.type}/>
                </div>
                <div className="group-1">
                    <Input onChange={e => carHandle(e.target.value, 'brand')} type='text' name='Brand' value={car.brand}/>
                </div>
                <div className="group-1">
                    <Input onChange={e => carHandle(e.target.value, 'model')} type='text' name='Model' value={car.model}/>
                </div >
                <div className="group-1">
                    <Input onChange={e => carHandle(e.target.value, 'year')} type='number' name='Year' value={car.year}/>
                </div >
                <div className="group-1">
                    <Select onChange={e => carHandle(e.target.value, 'fuel')} options = {['petrol', 'diesel', 'hybrid', 'electric']} name='Fuel' value={car.fuel}/>
                </div>
                <div className="group-1">
                    <Input onChange={e => carHandle(e.target.value, 'seats')} type='number' name='Seats' value={car.seats}/>
                </div>
                <div className="group-1">
                    <Input onChange={e => carHandle(e.target.value, 'price')} type='number' name='Price/Day $' value={car.price}/>
                </div>
                <div className="group-1">
                    <Input onChange={e => carHandle(e.target.value, 'image')} type='text' name='Image' placeholder="url" value={car.image}/>
                </div>
                <div className="group-1">
                    <Input onChange={e => carHandle(e.target.value, 'available')} type='number' name='Available units' value={car.available}/>
                </div>
            </div>
            <div className="w-50 h-100 flex-c col">
                <div className="h-50 w-75 flex-c img-prev">
                    <img className="h-100" src={car.image}   alt=''/>
                </div>
                IMAGE
            </div>
            {edit ? 
                <div className="flex-c w-50 h-15 btn-wrap">
                    <button onClick={()=> btnHandle('edit', {id: edit, car:car})} type="button" className="form-btn" >{'EDIT'}</button>
                    <button onClick={()=> btnHandle('delete', edit)} type="button" className="form-btn" >{'DELETE'}</button>
                </div> :
                <div className="flex-c w-50 h-15 btn-wrap">
                    <button onClick={()=> btnHandle('add', car)} type="button" className="form-btn" >{'ADD'}</button>
                </div>
            }
           
         </div>
}