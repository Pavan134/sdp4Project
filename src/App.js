import logo from './logo.svg';
import { Routes, Route, useParams } from 'react-router-dom';
import { Header } from './components/Header';
import Slider from './components/Slider';
import Login from './components/Login';
import Home from './components/Home';
import SignUp from './components/SignUp';
import AdminHome from './components/AdminHome';
import AddProduct from './components/addProduct';
import ProductList from './components/ProductList';
import Product from './components/Product';
import UserHome from './components/UserHome';
import SignUp1 from './components/SignUp1';
import Test from './components/Test';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/admin' element={<AdminHome/>}></Route>
       <Route path='/addproduct' element={<AddProduct/>}></Route>
       <Route path='/products' element={<ProductList/>}></Route>
       <Route path='/product' element={<Product/>}></Route>
       <Route path='/user' element={<UserHome/>}></Route>
       <Route path='/signup1' element={<SignUp1></SignUp1>}></Route>
       <Route path='/test' element={<Test/>}></Route>
      </Routes>
      
    </>
  );
}

export default App;
