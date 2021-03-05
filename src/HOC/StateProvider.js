import React, {createContext, useReducer, useState} from 'react';
import {cars} from '../reducers/cars';
import {customers} from '../reducers/customers';


const store = createContext();



function StateProvider({children}) {
   
    const [customersState, customerDispatch] = useReducer(customers.reducer, customers.state);
    const [carsState, carsDispatch] = useReducer(cars.reducer, cars.state);
    const [display, setDisplay] = useState(0);

    const customerActions = {};
    const carActions = {};

    ['add', 'edit', "delete"].forEach( action => {
        customerActions[action] = payload => customerDispatch({type: action.toUpperCase(), payload: payload});
        carActions[action] = payload => carsDispatch({type: action.toUpperCase(), payload: payload})
    } )

  
    const globalState =  {
       customersState: customersState,
       carsState : carsState,
       customerActions : {...customerActions},
       carActions : {...carActions},
       display : {
           set: setDisplay,
           state : display
       }
    }

    return <store.Provider value={globalState}>
        {children}
    </store.Provider>
}

export {store, StateProvider};