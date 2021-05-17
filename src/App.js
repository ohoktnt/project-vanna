import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import ScrollTopArrow from './components/ScrollTopArrow';
import ScrollToTop from "./ScrollToTop";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ReactDOM from "react-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleUp} from '@fortawesome/free-solid-svg-icons'
library.add(fab, faArrowAltCircleUp);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ScrollTopArrow/>
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
