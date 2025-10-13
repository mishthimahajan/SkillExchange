// import React, { createContext } from 'react'
// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();
// export const AuthProvider = ({ children }) => {
//   //   // const storeTokenInLS = (token) => {
//   //   //              localStorage.setItem("token",token);             
//   // }
//   const [token, setToken] = useState(localStorage.getItem("token") || null);
//   const clearTokenFromLS = () => {
//     localStorage.clear();
//   }
//   const storeTokenInLS = (serverToken) => {
//     return localStorage.setItem("token",serverToken)
//   }
//   const getTokenFromLS = ()=>{
//     return localStorage.getItem("token");
//   }
//   const logoutUser = () => {
//     clearTokenFromLS();
//     console.log("User logged out successfully 🚪");
//   };
//   const isLoggedIn = !!token;
//     return (
//       <AuthContext.Provider value={{ storeTokenInLS, clearTokenFromLS,getTokenFromLS,logoutUser}}>
//         {children}
//       </AuthContext.Provider>
//     );
// }
// export const useAuth = () => {
//     return useContext(AuthContext);
// }

// import React, { createContext, useContext, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || null);

//   // ✅ Store token in localStorage and update state
//   const storeTokenInLS = (serverToken) => {
//     localStorage.setItem("token", serverToken);
//     setToken(serverToken);
//   };

//   // ✅ Get token
//   const getTokenFromLS = () => {
//     return localStorage.getItem("token");
//   };

//   // ✅ Clear token (Logout helper)
//   const clearTokenFromLS = () => {
//     localStorage.removeItem("token");
//     setToken(null);
//   };

//   // ✅ Logout function
//   const logoutUser = () => {
//     clearTokenFromLS();
//     console.log("User logged out successfully 🚪");
//     window.location.href = "/login"; // redirect to login page
//   };

//   const isLoggedIn = !!token;

//   return (
//     <AuthContext.Provider
//       value={{
//         storeTokenInLS,
//         clearTokenFromLS,
//         getTokenFromLS,
//         logoutUser,
//         isLoggedIn,
//         token,
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };

import React, { createContext, useCallback, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 🟢 Keep React state in sync with localStorage
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  // ✅ Store token in both localStorage and state
  const storeTokenInLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
    setToken(serverToken); // update state too
  };

  // ✅ Clear token from both localStorage and state
  const clearTokenFromLS = () => {
    localStorage.removeItem("token");
    setToken(null); // update state too
  };

  // ✅ Logout function
  const logoutUser = () => {
    clearTokenFromLS();
    console.log("User logged out successfully 🚪");
  };
   
  // ✅ isLoggedIn will now reactively update
  const isLoggedIn = !!token;

  return (
    <AuthContext.Provider
      value={{
        storeTokenInLS,
        clearTokenFromLS,
        logoutUser,
        token,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
