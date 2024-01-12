import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./components/navbar/navbar";
import Footer from "./components/footer/footer"
import Router from "./router/router";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Router/>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
