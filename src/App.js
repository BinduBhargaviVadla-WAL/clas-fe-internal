import './App.css';
import DummyLogin from './state/ducks/login/dummyContainer/DummyLogin';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './state/ducks/login/dummyContainer/Home';
import About from './state/ducks/login/dummyContainer/About';

function App() {
  return (
    <div className='App'>
      <p>Welcome to HMIS App</p>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
        </Routes>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </BrowserRouter>

      <DummyLogin />
    </div>
  );
}

export default App;
