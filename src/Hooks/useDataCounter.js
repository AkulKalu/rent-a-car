export default function useDataCounter(customers, cars) {
    const countCustomers = () => {
        let allCustomers = Object.entries(customers)
        let renting = allCustomers.filter(([id, customer]) => {
            if (!customer.rentals.length) return false;
            let rental = customer.rentals[customer.rentals.length - 1]
            return ( new Date(rental.expires) ) > ( new Date() )
        })

        return {
            total : allCustomers.length,
            renting: renting.length
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
        carCount.avalible = carCount.total - customerCount.renting
        return {
            customers: {
                ...customerCount 
            },
            cars: {
               ...carCount
            }
        }
    }
    return  {count : countData};
}
