import React from 'react';

const Footer = () => {
    const today = new Date()
    const year = today.getFullYear()
    return (
        <div className='my-5'>
            <p>Copyright &copy;{year}</p>
        </div>
    );
};

export default Footer;