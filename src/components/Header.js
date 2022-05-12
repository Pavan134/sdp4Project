import React from 'react'
import './styles/HeaderStyle.css'
import Login from './Login'
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'  
export const Header = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='head'>
      <div className='title'>Smart App</div>
      <a href="" className='a1'>products</a>
      <a href='' className='button1'><i class="fa fa-sign-in"></i>Sign in</a>
      <a href='' className='button1'><i class="fa-solid fa-user-plus"></i>sign up</a>
      
    </div>
    </div>
  )
}
