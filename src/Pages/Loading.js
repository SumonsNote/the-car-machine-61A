import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className=''>
             <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;