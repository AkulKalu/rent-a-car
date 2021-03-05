import {Table} from '../storage/storage';

const customersTable = new Table({
    stats : {
        total: {
          registered : 0,
          renting : 0,
        },
        new : {
          registered : 0,
          renting : 0,
        },
        regular : {
          registered : 0,
          renting : 0,
        },
    },
    customers : {

    }
})


const initalState = {
    ...customersTable.table
};



const reducer = (state, action) => {
    const {type, payload } = action;
    
    switch (type) {
      
      case "ADD":
        return {
       
        }
      case "EDIT":
        return {
        
        }
    case "DELETE":
        return {
         
        }
    default:
      return state;
    }
  };


  export const customers = {
      state : initalState,
      reducer : reducer
  }