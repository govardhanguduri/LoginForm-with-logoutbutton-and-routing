import React from 'react'
import { Navigate} from 'react-router-dom';


const ProtectedRoute = ({Component, redirectLink, ...props}) => {
   let token = localStorage.getItem('token');
   console.log(token);
        if (!token ) {
            return <Navigate to={redirectLink}/>
       } else {    
        // if(!isAuthenticated) {
        //     return <Navigate to={redirectLink} />;
        // }
        
        return <Component {...props} />
    }
    
}

export default ProtectedRoute



