import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Products = ({product}) => {
    const {name,logo,id} = product;
    return (
    <div className='border shadow rounded-1 col m-auto mb-5' style={{ width: '30rem' }}>
        <Card style={{ width: '80%',height: '80%' }} className='m-auto pt-5 border-0'>
            <Card.Img variant="top" src={logo} />
                <Card.Body className='d-flex justify-content-between'>
                    <p className='fw-semibold'>{name}</p>
                    <Button variant="primary"><Link className='fw-semibold text-light text-decoration-none' to={`/quiz/${id}`}>Start Quiz</Link></Button>
                </Card.Body>
        </Card>
    </div>
    );
};

export default Products;