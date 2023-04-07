import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='text-center mt-5'>
            <h1 style={{fontSize:'12vw'}}>404</h1>
            <h6 className='fw-semibold fs-5'>Page Not Found</h6>
            <p className='fw-bold'>The page you're looking for does not seem to exist.</p>
            <button className='border-0 p-2 rounded'>
                <Link className='text-decoration-none fw-semibold' to='/home'>Back to Home</Link>
            </button>
        </div>
    );
};

export default ErrorPage;