export default function useAccountant() {

    const lengthDiscount = (started, ended) => {
       
        let start = new Date(started).getTime();
        let end = new Date(ended).getTime();
        let dayDiff = (end - start) / ( 1000 * 3600 * 24);

        let discounts = {
            3 : 5,
            5 : 7,
            10 : 10
        }
        let discount = 0;
        Object.keys(discounts).forEach( disc => {
            if(dayDiff > disc) {
                discount = discounts[disc]
            }
        })
       
        return discount;
    }
    const vipDiscount = pastRentals => {
        if(pastRentals.length > 2) {
            let thirdBack = pastRentals[pastRentals.length - 3];
            let past = new Date(thirdBack.started).getTime();
            let currentDate = new Date().getTime();
            let dayDiff = (currentDate - past) / ( 1000 * 3600 * 24);

            if( dayDiff <= 60 ) return 15;
        }
        return 0;
    }

    const total = (carPricing, discounts) => {
        let total = carPricing
        discounts.forEach((disc) => {
            if(disc) {
                total = total-(total * (disc / 100))
            }
        });
        
        return total;
    }

    return  {
        lengthDiscount : lengthDiscount,
        vipDiscount : vipDiscount,
        priceTotal : total
    }
}
