import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Drawer from '../Drawer/Drawer';
import Item from './Item/Item';

const AllOrders = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://intense-crag-53623.herokuapp.com/orders/all')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
            })
    }, []);

    const handleDeleteOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to Delete?');
        if (proceed) {
            const url = `https://intense-crag-53623.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert('Succesfully Deleted')
                        const remainingOrders = products.filter(item => item._id !== id);
                        setProducts(remainingOrders);
                    }
                })
        }
    }

    return (
        <div className="container">
      <Navigation></Navigation>
      <div className="row justify-content-between">
        <Drawer></Drawer>

        <div className="col-8  bg-dark rounded-3 p-4 text-dark">
        <div style={{minHeight: '70vh'}}>
            {
                products.map(item => <Item key={item._id} handleDeleteOrder={handleDeleteOrder} item={item}></Item>)
            }
        </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
       
    );
};

export default AllOrders;