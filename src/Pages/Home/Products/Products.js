import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../../Shared/Product/Product';

const Products = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://intense-crag-53623.herokuapp.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    const sliceNum = Math.round(Math.random()*6)

    return (
        <div className='mt-3' style={{ background: '#F8F9F9' }}>
            <Container>
                <Row>
                    {
                        products.slice(sliceNum, sliceNum + 6).map(product => <Product key={product._id} product={product}></Product>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Products;