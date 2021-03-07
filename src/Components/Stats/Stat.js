import React from 'react';
import './Stats.css';

export default function Stat(props) {
    const {name, value } = props;

    return <div className="w-15 h-50 stat">
                <div className="h-25 flex ait-center  stat-name">{name.toUpperCase()}</div>
                <div className="h-75 flex-c stat-value">{value}</div>
            </div>
}
