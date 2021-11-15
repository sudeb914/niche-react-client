import React, { useEffect, useState } from 'react';
import { Container, Spinner, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import ProductModal from '../ProductModal/ProductModal';

const FullDiscription = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [information, setInformation] = useState({});
    useEffect(() => {
        fetch(`https://intense-crag-53623.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data?.img) {
                    setLoading(false);
                    setInformation(data);
                }
            })
    }, [id])
    const { name, img, fullDescription, cost } = information;
    
    return (
        <div style={{minHeight: '70vh'}}>
            <Navigation></Navigation>
            {loading ? <div className='text-center'><Spinner animation="grow" variant="info" /></div> :
                <Container>
                    <h1>{name}</h1>
                    <div className='m-auto mt-3' style={{ maxWidth: '800px' }}>
                        <img src={img} className='img-fluid' alt="" />
                    </div>
                    <h3 className='my-3'>Price: {cost}</h3>
                    <div>
                        <Button variant="outline-danger" onClick={handleShow}>Place Order</Button>
                        <ProductModal show={show} handleClose={handleClose} information={information}></ProductModal>
                    </div>
                    <h4>Description:</h4>
                    <p>{fullDescription}</p>
                </Container>}
            <Footer></Footer>
        </div>
    );
};

export default FullDiscription;