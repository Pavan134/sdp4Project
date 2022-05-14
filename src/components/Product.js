import React from 'react'
import './styles/product.css'
import image1 from './images/image1.jpg';
import { Header } from './Header';
function Product({product,key}) {
  return (
    <div>
        
        <div class='cardproduct'>
            <img src={product.imageUrl} className="classproduct"></img>
            <h1 className='font'>{product.name}</h1>
            <h5 style={{float:'left'}}>use:</h5><p>{product.use}</p>
            <p className='price'>Rs.{product.price}/Square meter</p>
            <button></button>
            
        </div>
        
    </div>
  )
}

export default Product