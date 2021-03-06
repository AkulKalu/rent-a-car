import {Table} from '../storage/storage';

const customersTable = new Table('rc-customers',{
    idTrack: 0,
    customers : {
       
    }
})


const initalState = {
    ...customersTable.table
};



const reducer = (state, action) => {
    const {type, payload } = action;
    
    let newState = {};

    switch (type) {
      case "ADD":
        newState = {
          customers: {
                ...state.customers,
                [state.idTrack] : payload,
            },
            idTrack : state.idTrack + 1
        }
     
        customersTable.save(newState);
        return newState;
      case "EDIT":
        newState = {
            ...state,
            customers: {
                ...state.customers,
                [payload.id] : payload.customer,
            },
        }

        customersTable.save(newState);
        return newState
    case "DELETE":
        newState = {
            ...state,
        }
        delete newState.customers[payload];
        customersTable.save(newState);
        return newState
    default:
      return state;
    }
  };


  export const customers = {
      state : initalState,
      reducer : reducer
  }