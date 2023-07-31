import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

const AppRouter = () => {
  return <BrowserRouter>
  
  <Navbar/>
  <Routes>
  <Route path = "/" element = {<Main/>} />
  




  </Routes>
  
  
  
  
  </BrowserRouter>
};

export default AppRouter;
