import React, {Fragment, useState} from 'react';
import { cars } from '../../reducers/cars';
import CarForm from '../Forms/CarForm';
import Window from '../Window/Window';

import './Cars.css';


export default function Car(props) {
    let {data: [carId, car]} = props;
    
    const [window, setWindow] = useState(0);

    return <Fragment>
        <div onClick={() => setWindow(window + 1) }  className="h-100 w-100 car" >
                <div className='h-15 flex car-top'>
                    <div className="w-50 h-100 flex-c jcont-start">
                        <span>{car.type.toUpperCase()}</span>
                    </div>
                    <div className="w-50 h-100 flex-c jcont-end">
                        <span >{car.available}</span>
                    </div>
                </div>
                <div className="h-75  flex-c">
                    <img className="h-75" src={car.image} alt=""/>
                </div>
                <div className="flex-c">{`${car.brand} ${car.model}`}</div>
            </div>
         <Window
              title = {`EDIT/DELETE CAR`} 
              content={CarForm} 
              edit = {carId}
              show={window} 
         />
    </Fragment> 
}