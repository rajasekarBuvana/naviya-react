import React from "react";
import './components/Fontawesome';
import Header from "./components/Header";
import About from "./components/About";
import products from "./components/Products";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import './script';
function App() {
  return (
    <div className="App">
<Header/>
<About/>
<Products/>
<Contact/>
<Footer/>
    </div>
  );
}

export default App;
