import React ,{useState,useEffect}from 'react'
import Product from './Product'
import axios from 'axios'
function HomeComponents() {
    const [products, setproduct] = useState([])
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
    const productlist1=products.map((product)=><Product key={product.id} product={product}></Product>)
  return (
    <div>
        {productlist1}
    </div>
  )
}

export default HomeComponents