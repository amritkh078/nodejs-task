import React from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});


const Dashboard = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div>Dashboard</div>
    </ThemeProvider>
  )
}

export default Dashboard