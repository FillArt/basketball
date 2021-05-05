/* eslint-disable react/prop-types */
import  React from  "react";
import { Route, Redirect } from  "react-router-dom";
import { routePaths } from "./constants/routePath";



const PrivateRoute: React.FC<{
        component: React.FC;
    }> = (props) => {

    console.log(props)

    return  localStorage.getItem('token') ? (<Route  path={routePaths.teams}  component={props.component} />) :
        (<Redirect  to={`${routePaths.signIn}`}  />);
};

export  default  PrivateRoute;