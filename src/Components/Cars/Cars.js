import React, {useContext} from 'react';
import Car from './Car';
import {store} from '../../HOC/StateProvider'
import './Cars.css';




export default function Cars(props) {
    const {carsState} = useContext(store);
  
    let cars = Object.entries(carsState.cars).map( (entry, i) => {
       
        return <Car key={`car${i}`} data = {entry} />
    } )
    return <div className="h-100 w-100 cars" >
       {cars}
    </div>
}