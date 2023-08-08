import Header from "./partials/Header.js"
import Home from "./views/Home.js"
import Footer from "./partials/Footer.js"

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

function About() {
  return <h2>About</h2>;
};

function Users() {
  return <h2>Users</h2>;
};


export default App;
