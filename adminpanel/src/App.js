import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';

function App() {
  return (
    <>
    <Routes>
      <Route path='/*' element={<Login/>} />
      <Route path='/dashboard/*' element={<Home/>} />
    </Routes>
    </>
  );
}

export default App;
