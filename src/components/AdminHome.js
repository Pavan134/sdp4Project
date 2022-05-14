import React,{useContext,useState,useEffect} from 'react'
import { UserContext } from './Login'
import axios from 'axios'
import AddProduct from './addProduct'
import Product from './Product'
import ProductList from './ProductList'
import { Header } from './Header'

function AdminHome() {
  
    const id=localStorage.getItem("id")
    if(!id)
    window.location.href ="http://localhost:3000/login"
    const [user, setUser] = useState({})
    const className='button1'
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/getuser/${id}`).
    then(
        response=>{

            setUser(response.data)
        })
        .catch(error=>{
            setUser({})
            
        })
    },[])
    const logout=()=>{
      localStorage.removeItem("id")
      window.location.href ="http://localhost:3000/login"
    }

  return (
<div>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='head'>
      <div className='title'>Smart App</div>
      <a href="/products" className='a1'>products</a>
      <button style={{margin:"15px"}}>{user.username}</button>
      <button style={{margin:"15px"}} onClick={logout}>logout</button>
      </div>
    <AddProduct></AddProduct>
    <a href='/' style={{margin:"5px"}}>Home</a>
    <a href='/products'>products</a>
    <ProductList></ProductList>
    </div>
  )
}

export default AdminHome