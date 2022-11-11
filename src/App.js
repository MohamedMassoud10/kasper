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
      <Routes>
      <Route path='/' element={<Header/>}></Route >
      <Route path='/About' element={<About/>}></Route >
      <Route path='/Pricing' element={<Pricing/>}></Route >
      <Route path='/Contact' element={<Contact/>}></Route >
      <Route path='/Portfolio' element={<Portfolio/>}></Route >
      <Route path='/Services' element={<Services/>}></Route >
      </Routes>
    </div>
  );
}

export default App;
