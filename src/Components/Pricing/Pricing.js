import React from 'react';

 function Pricing(props) {
    const {carPricing, lenDisc, vipDisc, total } = props;

    return <div className="w-75 marg-t-5 padd-t-5 bdr-top  flex col">
                <div className="w-100 flex">
                    <h3 className="w-50">PRICING/DAY</h3>
                    <h3 className="w-50 txt-r">DISCOUNT</h3>
                </div>
                <div className="w-100 flex">
                    <div className="w-50">{carPricing}$</div>
                    <div className="w-50 txt-r">
                        <div className="w-100">{lenDisc}%  on length</div>
                        <div className="w-100">{vipDisc}%  vip</div>
                    </div>
                </div> 
                <h3 className="w-50">TOTAL</h3>
                <div>{total} $/day</div>
            </div>
}

export default Pricing;