import React from 'react';
import {Route, Routes, Navigate} from 'react-router-dom';
import {useUserContext} from "../../context/userContext";
import {publicRoutes, privateRoutes} from "./router";

const AppRouter = () => {
  const {isAuth} = useUserContext()
  return (
    <Routes>
      {isAuth ? (
        <>
          {privateRoutes.map(item => (
            <>
           <Route
             key={item.path}
             element={item.element}
             path={item.path}
           />
            <Route path='*' element={<Navigate to='/warehouses'/>}/>
            </>
            ))}
        </>
      ):(
        <>
          {publicRoutes.map(item => (
            <Route
              key={item.path}
              element={item.element}
              path={item.path}
            />
          ))}
        </>
      )
      }
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
  );
};

export default AppRouter;