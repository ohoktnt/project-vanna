import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import Footer from './components/Footer'

import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fab)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <Footer />
    </div>
  );
}

export default App;
