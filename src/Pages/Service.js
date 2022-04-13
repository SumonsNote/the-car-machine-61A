import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const navigate = useNavigate()
    const navigateToDetail = id => {
        navigate(`/service/${id}`)
    }

    const {id, name, img, description, price} = service;
    return (
        <div className='service-container'>
            <img src={img} alt=""/>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => navigateToDetail(id)} className='btn btn-primary'>Book Now</button>
        </div>
    );
};

export default Service;