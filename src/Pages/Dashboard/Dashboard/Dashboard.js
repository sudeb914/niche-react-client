import React from 'react';
import { Container } from 'react-bootstrap';
import {
    useRouteMatch,

} from "react-router-dom";
import useAuth from '../../../Hooks/useAuth';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Drawer from '../Drawer/Drawer';


const Dashboard = () => {
    const { user,isAdmin } = useAuth();
    return (
        <div>
            <Navigation></Navigation>
            <Container>
               <div className="row justify-content-between">
               <Drawer></Drawer>
                <div className="col-8 bg-dark rounded-3 p-4 text-white">
                    <h1>HI,{user.displayName}</h1>
                    <p>
                        Role: 
                        {
                        isAdmin?
                        (
                            <span className="text-warning"> Admin</span>
                        )
                        :
                        (
                            <span className=" text-warning"> Genaral user</span>
                        )
                    }
                    </p>
                </div>
               </div>
                
            </Container >
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;