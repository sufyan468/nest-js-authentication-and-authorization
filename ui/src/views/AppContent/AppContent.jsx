import React, {Fragment, useEffect, useState} from 'react'
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import AppBarComponent from '../../assets/styles/components/AppBarComponent/AppBarComponent';
import { Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

const AppContent = ({routes}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showNavBar, setShowNavBar] = useState(true);

  const hideNavBar = () => {
    setShowNavBar(!showNavBar);
    console.log("clicked")
  }
  useEffect(() => {
    if (location.pathname === '/' && !localStorage.getItem('token')) {
      navigate('/login', { replace: true });
    }
  },[])

  return (
    <Fragment>
      <Box sx={{display: "flex"}}>
      {showNavBar &&
        <Box sx={{width: "250px", height: "100%", flex: "1 0 auto", background: "white", position: "fixed" }}>
          <AppBarComponent/>
        </Box>
      }
        <Box sx={{width: showNavBar  ?  "calc(100% - 250px)" : "100%", marginLeft: "250px"}}>
          <Box sx={{background: "#007FFF", display: "flex", justifyContent: "space-between", color: "white", alignItems: "center", p: 2 }}>
            <Box>
              <Button sx={{color: "white"}}>
                <MenuIcon onClick={hideNavBar}/>
              </Button>
            </Box>
            <Box>
              <Button sx={{color: "white"}}>
                <AccountCircleTwoToneIcon fontSize="large" />
              </Button>
            </Box>
          </Box>
          <Box p={2}>
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={<route.component />} />
              ))}
            </Routes>
          </Box>
        </Box>
      </Box>
    </Fragment>
  )
}

export default AppContent
