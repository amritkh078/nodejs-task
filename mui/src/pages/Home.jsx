import React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from "@mui/material";


const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

const Home = () => {
  return (
    <ThemeProvider theme={darkTheme}>
        <h1>Home</h1>
        <Button variant="contained" href="/login">Login</Button><br/><br/>
        <Button variant="contained" href="/register">Register</Button>
        
    </ThemeProvider>
  )
}

export default Home