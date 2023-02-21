import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

const HomePage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>Home Page</div>
    </ThemeProvider>
    
  )
}

export default HomePage