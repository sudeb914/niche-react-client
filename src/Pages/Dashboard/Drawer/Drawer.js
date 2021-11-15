import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";

const Drawer = () => {
  const { logOut, isAdmin } = useAuth();
  return (
    <div className="mb-3 col-3 p-4 rounded-3 bg-dark">
      {isAdmin ? (
        <span>
          <Link className="btn btn-warning my-2  d-block" to="/makeadmin">
            Make Admin
          </Link>
          <Link className="btn btn-warning my-2  d-block" to="/additem">
            Add Product
          </Link>
          <Link className="btn btn-warning my-2  d-block" to="/allorders">
            All Orders
          </Link>
        </span>
      ) : (
        <span>
          <Link className="btn btn-warning my-2  d-block" to="/myorder">
            My Orders
          </Link>
          <Link className="btn btn-warning my-2  d-block" to="/addreview">
            Give Review
          </Link>
          <Link className="btn btn-warning my-2  d-block" to="/pay">
            Pay
          </Link>
        </span>
      )}

      <Link
        className="btn  btn-outline-warning my-2 d-block "
        to="/"
        onClick={logOut}
      >
        Log Out
      </Link>
    </div>
  );
};

export default Drawer;
