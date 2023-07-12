import './App.css';
import AboutUs from './components/AboutUs';
import Header from './components/Header';
import Location from './components/Location';
import Menu from './components/Menu';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">

    <div className='app-body' id='Home'>
      <Header />
      <NavBar 
        links={[
          {
            name: 'Home',
            url: '#Home'
          },
          {
            name: 'About',
            url: '#About'
          },
          {
            name: 'Menu',
            url: '#Menu'
          },
          {
            name: 'Order',
            url: '#Order'
          },
          {
            name: 'Contact',
            url: '#Contact'
          }
        ]}
      />
      <AboutUs />
      <Menu />
      <Location />

    </div>

    </div>
  );
}

export default App;
