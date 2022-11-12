import { Route , Routes} from 'react-router-dom';
import './index.css';
import Header from "./component/Header"
import About from './component/About';
import Pricing from './component/Pricing';
import Portfolio from './component/Protfolio';
import Services from './component/Servicec';
import Contact from './component/Contact';
function App() {
  return (
    <div className='container'>

      <Header/>
      <Services/>
      <Portfolio/>
      <About/>
      <Pricing/>
      <Contact/>
    </div>
  );
}

export default App;
