
import './App.css';
import Navbar from './components/navbar';
import BannerSlide from './components/bannerSlide'
import About from './components/about'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <BannerSlide/>
    </div>
  );
}

export default App;
