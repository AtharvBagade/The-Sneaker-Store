
import './App.css';
import { Navbar } from './Components/Navbar';
import Slider from './Components/Slider';
import Images from './Components/Images';
import Intro from './Components/Intro';
import Deals from './Components/Deals';
import Categories from './Components/Categories';
import Footer from './Components/Footer';

function App() {
  
  return (
    <div className="App">
     <Navbar />
     <Slider Images={Images}/>
     <Intro />
     <Deals />
     <Categories />
     <Footer />
    </div>
  );
}

export default App;
