import React, { Fragment } from 'react';
import {Container, Grid, Button, Box, TextField, Typography, Checkbox} from "@mui/material"
import { useNavigate } from "react-router-dom";


const Login = () => {
  const navigate = useNavigate()
  const LoginClick = () => {
    console.log("Login Clicked");
    navigate('/user/dashboard');
  }
  return (
    <Fragment>
      <Box sx={{background: 'linear-gradient(45deg, #cfbcdf, #c7ebf0)', width: "100%"}}>
        <Container alignItems="center" >
          <Grid container  sx={{height: "100vh", alignItems: "center", justifyContent: "center",  }}>
            <Grid item xs={12} sm={12} md={5} lg={4} sx={{background: "white",boxShadow: 3, borderRadius: 3, p:3, width: "100%" }}>
              <Typography variant="h4" pb={5} color="initial" align="center" fontWeight="bold">
                Login
              </Typography>
              <Box>
                <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
              </Box>
              <Box my={3} ><TextField id="outlined-basic" label="Password" variant="outlined" fullWidth />
              </Box>
              <Box sx={{ background: '#0288d1', color: '#fff', p: 0.4, borderRadius: '4px'}}>
              <Button fullWidth sx={{color: "white", }} onClick={LoginClick}>Login</Button>
              </Box>

              <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between", mt:3}}>
                <Box display="flex">
                  <Checkbox defaultChecked />
                  <p>Remember me</p>
                </Box>
                <Box>
                  <p>Forgot Password</p>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  )
}

export default Login
