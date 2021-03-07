import React from 'react';
import Header from '../Header/Header';
import Display from '../Display/Display';


export default function Layout(props) {
    return <div  className="bg">
                <Header />
                <Display />
            </div>
}