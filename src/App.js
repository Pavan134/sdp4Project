import logo from './logo.svg';
import { Routes, Route, useParams } from 'react-router-dom';
import { Header } from './components/Header';
import Slider from './components/Slider';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
