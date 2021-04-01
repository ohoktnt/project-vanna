
import './App.css';
import Navbar from './components/navbar';
import BannerSlide from './components/bannerSlide'
import About from './components/about'
import ServiceList from './components/serviceList'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <ServiceList />
      <BannerSlide/>
    </div>
  );
}

export default App;
