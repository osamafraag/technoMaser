import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./components/navbar/navbar";
import Footer from "./components/footer/footer"
import Router from "./router/router";
import {TokenContext} from "./context/token"
import {RoleContext} from "./context/role"
import React,{useState} from 'react'
import './App.css';

function App() {
  const [Token, setToken] = useState(null);
  const [Role, setRole] = useState(null);
  return (
    <TokenContext.Provider value={{ Token, setToken }}>
      <RoleContext.Provider value={{ Role, setRole }}>
    <BrowserRouter>
      <HeaderNav />
      <Router/>
      <Footer/>
    </BrowserRouter>
    </RoleContext.Provider>
    </TokenContext.Provider>
  );
}

export default App;
