import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../Hooks/useAuth";

const AdminRoute = ({ children, ...rest }) => {
  const { isAdmin, loading } = useAuth();

  if (loading) {
    return (
      <button className="btn btn-main" type="button" disabled>
        <span
          className="spinner-grow spinner-grow-sm"
          role="status"
          aria-hidden="true"
        ></span>
        Loading...
      </button>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isAdmin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/dashboard",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
