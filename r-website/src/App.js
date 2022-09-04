
import './App.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

import Home from "./webpages/home";
import Weather from "./webpages/weather";
import Info from "./webpages/info";
import Games from "./webpages/games";
import Navbar from './component/NavBar';
import Footer from './component/footer';


function App() {
  return (
    <Router>
    <div className="App"> 
          <Navbar/>
      <div className="content">
          <Routes>
          <Route index element={<Home />} />
          <Route path="games" element={<Games />}/>
          <Route path="weather" element={<Weather />}/>
          <Route path="info" element={<Info />}/>
          </Routes>
        </div>
    </div>
    <Footer Name ="Jadugar" email="test@test.pl"/>
    </Router>
  );
}



export default App;
