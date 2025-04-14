
import { Route, Routes } from 'react-router';
import './App.css';
import { NavBar } from './components/Navbar';
import { Home } from './components/Home';
import Fahras from './components/Fahras';
import Azkar from './components/Azkar';
import { Footer } from './components/Footer';
import Guzes from './components/Guzes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='guzes' element={<Guzes/>} />
        <Route path='azkar' element={<Azkar/>}/>
        <Route path='fahras' element={<Fahras />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
