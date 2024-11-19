import './App.css';
import Edit from './Pages/Edit/Edit';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/e-learning' element={<Home/>} />
        <Route path='/user-editpage' element={<Edit/>} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
