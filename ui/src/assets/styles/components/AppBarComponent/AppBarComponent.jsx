import React, {useState} from 'react'
import { Box, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const AppBarComponent = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  const navBarLinks = [
    {
      id: 1,
      name: 'Dashboard',
      path: '/dashboard',
      icons: <HomeIcon />,
    },
    {
      id: 2,
      name: 'Settings',
      path: '/profile',
      icons: <SettingsIcon />,
    }
  ]
  return (
      <Box p={2}>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Typography variant="h5" fontWeight="bold" color="initial">
              NestJS
            </Typography>
          </Box>
          <Box>
            <IconButton sx={{ ml: 1 }} onClick={handleDarkMode}  color="inherit">
              {darkMode  ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </Box>
        </Box>
        <Box mt={5}>
        {
          navBarLinks && navBarLinks.map((item) => (
            <Box key={item.id} sx={{display: "flex", alignItems: "center", justifyContent: "flex-start", gap: "0.6rem", mt: 2}}>
              <Box>
                {item.icons}
              </Box>
              <Box>
                {item.name}
              </Box>
            </Box>
          ))
        }
        </Box>

      </Box>

  )
}

export default AppBarComponent
