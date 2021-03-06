import React from 'react';

export default function RentalDisplay(props) {
    const {car, info } = props;
    return <div className="w-100  h-100  flex-c col">
                <div>car: {car.brand}-{car.model}</div>
                <div>started at: {info.started}</div>
                <div>expires at: {info.expires}</div>
                <div>cost/day: {info.priceTotal}$</div>
                <div className="w-100 flex-c h-50 ">
                    <img className="h-100" src={car.image} alt=""/>
                </div>
            </div>
}
