import {Table} from '../storage/storage';

const carsTable = new Table('rc-cars',{
    idTrack: 2,
    cars : {
        0 :{
            available: "5",
            brand: "BMW",
            fuel: "diesel",
            image: "https://cars.usnews.com/static/images/Auto/izmo/i159614203/2021_bmw_x2_angularfront.jpg",
            model: "X2",
            price: "120",
            seats: "5",
            type: "SUV",
            year: "2020"
        },
        1 : {
            available: "4",
            brand: "BMW",
            fuel: "petrol",
            image: "https://s.aolcdn.com/commerce/autodata/images/USC90BMC681A021001.jpg",
            model: "i8",
            price: "150",
            seats: "2",
            type: "economy",
            year: "2020"
        }
    },
   
})

const initalState = {
    ...carsTable.table
};



const reducer = (state, action) => {
    const {type, payload } = action;
    let newState = {};

    switch (type) {
      case "ADD":
        newState = {
            cars: {
                ...state.cars,
                [state.idTrack] : payload,
            },
            idTrack : state.idTrack + 1
        }
        carsTable.save(newState);
        return newState;
      case "EDIT":
        newState = {
            ...state,
            cars: {
                ...state.cars,
                [payload.id] : payload.car,
            },
        }
        carsTable.save(newState);
        return newState
    case "DELETE":
        newState = {
            ...state,
        }
        delete newState.cars[payload];
        console.log(newState, '');
        carsTable.save(newState);
        return newState
    default:
      return state;
    }
  };


  export const cars = {
      state : initalState,
      reducer : reducer
  }