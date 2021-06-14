import "./App.css";
import 'react-toastify/dist/ReactToastify.css';

// components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollTopArrow from "./components/ScrollTopArrow";
import ScrollToTop from "./ScrollToTop";

import { ToastContainer } from "react-toastify";
// mulitpage set up
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Icons
// import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleUp,  faEnvelope } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faArrowAltCircleUp, faEnvelope);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollTopArrow />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
