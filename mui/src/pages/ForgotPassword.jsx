import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

const ForgotPassword = () => {

  return (
    <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Typography component="h1" variant="h5">
            Reset Password
        </Typography>
        <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
        /><br/>
        <TextField margin='normal' required id='password' label='password' autofocus/><br/>
        <Button variant='contained' href='/login'>Reset</Button>
    </ThemeProvider>
  )
}

export default ForgotPassword