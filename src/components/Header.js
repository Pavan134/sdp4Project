import React from 'react'
import './styles/HeaderStyle.css'
export const Header = () => {
  return (
    <div>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className='head'>
      <div className='title'>Smart App</div>
      <a href="">products</a>
      <button><i class="fa fa-sign-in"></i>Login</button>
      <button><i class="fa-solid fa-user-plus"></i>sign up</button>
      
    </div>
    </div>
  )
}
