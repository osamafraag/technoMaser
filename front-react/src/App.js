import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./components/navbar/navbar";
import Router from "./router/router";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
      <Router/>
    </BrowserRouter>
  );
}

export default App;
