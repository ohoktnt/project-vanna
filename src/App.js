import './App.css';
import Navbar from './components/Navbar'
import ImgSlider from './components/ImgSlider'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Navbar />
      <ImgSlider/>
      <Home/>
    </div>
  );
}

export default App;
