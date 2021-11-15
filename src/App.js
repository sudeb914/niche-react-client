import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./Context/AuthProvider";
import AddNewItem from "./Pages/Dashboard/AddNewItem/AddNewItem";
import AddReview from "./Pages/Dashboard/AddReview/AddReview";
import AllOrders from "./Pages/Dashboard/AllOrders/AllOrders";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./Pages/Dashboard/MakeAdmin/MakeAdmin";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import Pay from "./Pages/Dashboard/Pay/Pay";
import Explore from "./Pages/Exolore/Explore";
import Home from "./Pages/Home/Home/Home";
import Review from "./Pages/Home/Review/Review";
import AdminRoute from "./Pages/Login/AdminRoute/AdminRoute";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import FullDiscription from "./Pages/Shared/FullDiscription/FullDiscription";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/explore">
            <Explore></Explore>
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <AdminRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
          </AdminRoute>

          <AdminRoute path="/allorders">
            <AllOrders></AllOrders>
          </AdminRoute>

          <AdminRoute path="/additem">
            <AddNewItem></AddNewItem>
          </AdminRoute>

          <PrivateRoute path="/pay">
            <Pay></Pay>
          </PrivateRoute>

          <PrivateRoute path="/myorder">
            <MyOrders></MyOrders>
          </PrivateRoute>

          <PrivateRoute path="/addreview">
            <AddReview></AddReview>
          </PrivateRoute>

          <PrivateRoute path="/product/:id">
            <FullDiscription></FullDiscription>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route path={["/", "/home"]}>
            <Home></Home>
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
