import axios from 'axios'
import React ,{useState,useEffect}from 'react'
import Product from './Product'
import { Header } from './Header'
function ProductList() {
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
        <button style={{marginBottom:"20px",marginRight:"30px",float:"right"}} className="btn btn-primary">Home</button><br></br>
        {values}
       {productlist1}
       
    </div>
  )
}

export default ProductList