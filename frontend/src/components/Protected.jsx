// import React from 'react'
// import { useAuth } from '../store/Auth'
// import { Navigate } from 'react-router-dom';
// function Protected({children}) {
    
//     const token = localStorage.getItem("token");
//   return (
//   token? children:<Navigate to="/login" replace/>
//   )
// }

// export default Protected;

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/Auth";

function Protected({ children }) {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

export default Protected;
