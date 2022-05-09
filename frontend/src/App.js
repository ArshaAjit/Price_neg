import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Form from "./components/Form";
import Products from "./pages/Products";
import About from "./pages/About"
import Contact from "./pages/Contact";

import {BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/products" exact element={<Products/>} />
          <Route path="/signup" exact element={<Form/>} />
          <Route path="/login" exact element={<Login/>} />
          <Route path="/about" exact element={<About/>} />
          <Route path="/contact" exact element={<Contact/>} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
