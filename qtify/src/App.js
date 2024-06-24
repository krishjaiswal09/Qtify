import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider"
import { Outlet } from "react-router-dom";
// import HomePage from "./pages/HomePage/HomePage";

function App() {
  const [data, setData] = useState({})

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet />
        {/* <HomePage /> */}
      </StyledEngineProvider>
    </>
  )
}

export default App;
