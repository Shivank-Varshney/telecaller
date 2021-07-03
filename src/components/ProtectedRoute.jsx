import React from 'react'
import {Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({isAuth: isAuth, component: Component, ...rest}) => {
    return (
        <>
            <Route 
                {...rest}
                component={(props)=>{
                    if(isAuth){
                        return <Component />;
                    }else{
                        return(
                            <Redirect to={{ pathname: "/", state:{ from: props.location}}} />
                        );
                    }
                }}
            />
        </>
    )
}

export default ProtectedRoute;