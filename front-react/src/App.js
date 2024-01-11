import { BrowserRouter } from "react-router-dom";
import HeaderNav from "./components/navbar/navbar";
import Router from "./router/router";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <HeaderNav />
        <div className='container bg-light'>
          <Router/>
        </div>
    </BrowserRouter>
  );
}

export default App;
