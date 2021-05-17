import './App.css';

import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
library.add(fab)

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path='/contact'>
            <Contact/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/services'>
            <Services />
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
