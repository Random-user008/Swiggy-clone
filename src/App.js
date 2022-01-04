//import logo from './logo.svg';
import './App.css';
import LandingMain from './Components/Landing/landingMain';
import Services from './Components/Landing/Services';
import AppLink from './Components/Landing/AppLink';
import Footer from './Components/Landing/Footer';
function App() {
  return (
    <div className="App">
        <LandingMain />
        <Services />
        <AppLink />
        <Footer />     
    </div>
  );
}

export default App;
