import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const {serviceKey} = useParams();
    return (
        <div>
            <h2>Welcome to Detail: {serviceKey}</h2>
            <div>
                <Link to='/checkout'>
                <button className='btn btn-primary'>Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;