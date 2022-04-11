import React from 'react';
import './Service.css'

const Service = ({service}) => {

    const {name, img, description, price} = service;
    return (
        <div className='service-container'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;