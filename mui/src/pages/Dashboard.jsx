import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Logout } from "../components";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Dashboard = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <h1>Dashboard</h1>
      <Logout />
    </ThemeProvider>
  );
};

export default Dashboard;
