import React from "react";
import { Route } from "react-router-dom";
import HeaderHome from "../Components/Header/HeaderHome";
import FooterHome from "../Components/Footer/FooterHome";
import DashboardLayout from "../Components/Layout/DashboardLayout";
import AuthLayout from "../Components/Layout/AuthLayout";
import ErrorLayout from "../Components/Layout/ErrorLayout";

/* PrivateRoute is for all Users & Visitor */ 
export var HomeRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) =>
        <React.Fragment>
          <HeaderHome />
          <Component {...props} />
          <FooterHome />
        </React.Fragment>
      }
    />
  );
};

/* PrivateRoute is for all Users & Visitor */ 
export var AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) =>
        <DashboardLayout>
          <Component {...props} />
        </DashboardLayout>
      }
    />
  );
};

/* PrivateRoute is for all Authentication [NOT LOGIN MEMBERS ONLY] */ 
export var AuthRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) =>
        <AuthLayout>
          <Component {...props} />
        </AuthLayout>
      }
    />
  );
};

/* PrivateRoute is for all Authentication [NOT LOGIN MEMBERS ONLY] */ 
export var ErrorRoute = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={(props) =>
        <ErrorLayout>
          <Component {...props} />
        </ErrorLayout>
      }
    />
  );
};
