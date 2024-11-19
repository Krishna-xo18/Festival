import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Festivals from "./pages/Festivals";
import Monuments from "./pages/Monuments";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/festivals" element={<Festivals />} />
          <Route path="/monuments" element={<Monuments />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
