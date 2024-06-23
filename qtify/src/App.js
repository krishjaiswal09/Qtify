import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import StyledEngineProvider from "@mui/material/StyledEngineProvider"

function App() {
  const [data, setData] = useState({})

  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
    </>
  )
}

export default App;
