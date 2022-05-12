import React from 'react'
import './styles/login.css'
import image from './images/loginbg.jpg'
function Login() {
  return (
    <div className='container'>
      <div className='login'>
        <h1 className='heading'>Login</h1>
        <hr/>
        <input type="text" placeholder="enter username" className='input'></input>
        <input type="text" placeholder="enter password" className='input'></input>
        <p>Forgot password</p>
        <button className='submit'>Submit</button>
      </div>
      
    </div>
  )
}

export default Login