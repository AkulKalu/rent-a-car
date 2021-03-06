import React, {createContext, useReducer, useState, useEffect} from 'react';
import {cars} from '../reducers/cars';
import {customers} from '../reducers/customers';
import useDataCounter from '../Hooks/useDataCounter';


const store = createContext();



function StateProvider({children}) {
   
    const [customersState, customerDispatch] = useReducer(customers.reducer, customers.state);
    const [carsState, carsDispatch] = useReducer(cars.reducer, cars.state);
    const [statsState, setStats] = useState({
        customers: {
            total: 2,
            renting: 1
        },
        cars: {
            total: 2,
            avalible: 1,
        }
    });
    const dataCounter = useDataCounter(customersState.customers, carsState.cars);

    useEffect(() => {
        setStats(dataCounter.count())
        console.log('s');
    },[carsState, customersState])

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
       statsState : statsState,
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