import Header from "./partials/Header.js"
import Home from "./views/Home.js"
import Services from "./views/Services.js"
import Products from "./views/Products.js"
import Service from "./views/Service.js"
import Product from "./views/Product.js"
import Footer from "./partials/Footer.js"
import Sidebar from "./partials/Sidebar.js";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <div id="page-wrap"/>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/services/:id" element={<Service/>}/>
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};


export default App;
