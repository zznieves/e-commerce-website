import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Location from './components/Location';
import Menu from './components/Menu';

function App() {
  return (
    <div className="App">

    <div className='app-body'>
      <Header />
      <AboutUs />
      <Menu />
      <Location />

    </div>

    </div>
  );
}

export default App;
