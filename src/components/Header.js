import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './styles/HeaderStyle.css'
import Login from './Login'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
export const Header = () => {
  const className='button1'
    const [user, setUser] = useState({})
    useEffect(()=>{
       try{
        const id=localStorage.getItem("id")
        
            axios.get(`http://127.0.0.1:8000/api/getuser/${id}`).
        then(
            response=>{
    
                setUser(response.data)
                className='display'
                console.log(`${className},${user}`)

            })
            .catch(error=>{
                setUser({})
          
            })
       }
       catch(e){

       }
    },[])
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='head'>
      <div className='title'>Smart App</div>
      <a href="/products" className='a1'></a>
      <a href='/login' className={`${className}`}><i class="fa fa-sign-in"></i>Sign in</a>
      <a href='/signup' className='button1'><i class="fa-solid fa-user-plus"></i>sign up</a>
      
    </div>
    </div>
  )
}
