import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Products from "./pages/products";
import Wallpapers from "./pages/wallpapers";
import Navbar from "./components/navbar";
import "./styles/main.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

library.add(faHouse);

function App() {
  return (
    <div className="App">
      <Router>
        <div className="page-container">
          <Routes>
            <Route exact="true" path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/wallpapers" element={<Wallpapers />} />
          </Routes>
        </div>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
