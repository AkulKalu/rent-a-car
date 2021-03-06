export default function useDataCounter(customers, cars) {
    const countCustomers = () => {
        let allCustomers = Object.entries(customers);
        let renting = 0;
        let carModelCount = {};
        allCustomers.forEach(([id, customer]) => {
            if (!customer.rentals.length) return false;
                let rental = customer.rentals[customer.rentals.length - 1]
                if( ( new Date(rental.expires) ) > ( new Date() ) ) {
                    renting++;
                    let carId = rental.carId
                    if( carId in carModelCount) {  
                        carModelCount[carId]++;
                    }else {
                        carModelCount[carId] = 1;
                    }
                   
                }
        })
        // let renting = allCustomers.filter(([id, customer]) => {
        //     if (!customer.rentals.length) return false;
        //     let rental = customer.rentals[customer.rentals.length - 1]
        //     return ( new Date(rental.expires) ) > ( new Date() )
        // })

        return { customers: {
            total : allCustomers.length,
            renting: renting
            },
            carModels : carModelCount
           
        }
    } 
    const countCars = () => {
        let total = 0
        let allCars = Object.entries(cars).forEach( ([id, car]) => {
            total += Number(car.available);
        } )
        return {
            total : total,
            avalible: 0
        }
    } 
    
    const countData = () => {
        let customerCount = countCustomers();
        let carCount = countCars();
        carCount.avalible = carCount.total - customerCount.customers.renting
        return {
            customers: {
                ...customerCount.customers
            },
            cars: {
               ...carCount
            },
            carModels: customerCount.carModels
        }
    }
    return  {count : countData};
}
