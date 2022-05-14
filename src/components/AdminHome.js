import React,{useContext,useState,useEffect} from 'react'
import { UserContext } from './Login'
import axios from 'axios'
import AddProduct from './addProduct'
import Product from './Product'
import ProductList from './ProductList'
import { Header } from './Header'

function AdminHome() {
    const id=localStorage.getItem("id")
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
            className='display'
        })
    },[])
    

  return (
<div>
    <Header></Header>
    <AddProduct></AddProduct>
    <a href='/' style={{margin:"5px"}}>Home</a>
    <a href='/products'>products</a>
    <ProductList></ProductList>
    </div>
  )
}

export default AdminHome