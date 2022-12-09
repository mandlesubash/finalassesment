import './App.css';
import Home from './components/Home';
import MagicNumber from './components/MagicNumber';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/magicnumber' element={<MagicNumber/>}/>
    </Routes>
    </Router>
    </div>
  );
}

export default App;
