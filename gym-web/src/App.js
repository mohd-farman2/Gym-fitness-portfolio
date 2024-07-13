import logo from './logo.svg';
import './App.css';
 import Navbar from './components/Navbar';
import Header from './components/Header';
import Feature from './components/Feature';
import Offer from './components/Offer';
import About from './components/About';
import Contact from './components/Contact';
//import OTPGenerator from './generateOTP';
function App() {
  return (
    <div className="App">
      
<Navbar/>
<Header/>
<Offer/>
<Feature/>
<About/>
<Contact/>
{/* <OTPGenerator/> */}
<h1>hello</h1>
    </div>
  );
}

export default App;
