import React, {Fragment, useEffect} from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Login from '../Login/Login';


const AppContent = ({routes}) => {

  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === '/' && !localStorage.getItem('token')) {
      navigate('/login', { replace: true });
    }
  },[])

  return (
    <Fragment>
    {
      location.pathname === '/' ? (
        <Login />
      ) : null
    }
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Fragment>
  )
}

export default AppContent
