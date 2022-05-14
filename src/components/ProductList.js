import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import Product from './Product'
import { Header } from './Header'
function ProductList() {
    const id=localStorage.getItem("id")
    if(!id)
    window.location.href ="http://localhost:3000/login"
    const [products, setproduct] = useState([])
    const [value, setvalue] = useState('')
    useEffect(()=>{
        axios.get(`http://127.0.0.1:8000/api/getproducts`)
        .then(response=>
            {
                setproduct(response.data)
                console.log(products)
            }
            )
        .catch(error=>{
            setproduct({})
        })
    },[])
    
    const productlist=products.map((search)=><h2>{search.name}</h2>)
    const productlist1=products.map((product)=><Product key={product.id} product={product}></Product>)
    let values=[];
    const searchValue=(e)=>{
        setvalue(...value,e.target.value)
        const search=products
       
    console.log(value) 
    }
  return (
    <div>
        
       
       {productlist1}
       
    </div>
  )
}

export default ProductList