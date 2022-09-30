
import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home} from "./components/pages/Home";
import {About} from "./components/pages/About";
//import {Favorite} from "./components/Favorites";
import { Characters } from "./components/pages/characters";
import { LoginPage } from "./components/auth/LoginPage";
import { RegisterPage } from "./components/auth/RegisterPage";
import Error404 from "./components/Error404";
import { HomeNavbar } from "./components/homeNavbar";
import { Favorites } from "./components/pages/Favorites";
import { Footer } from "./components/Footer";
import "./styles/styles.css"


function App() {
  return (
    <div className="App">
      <HomeNavbar />
      <div className="main">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/character" element={<Characters />} />
            <Route path="/fav" element={<Favorites/>}/>
            
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Router>
      </div>
      <div className="Footer">
      <Footer/>
      </div>
    </div>
  );
}

export default App;