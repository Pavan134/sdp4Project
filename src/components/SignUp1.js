import React from 'react'
import image1 from './images/slide2.jpg';
import './styles/signup.css'
function SignUp1() {
  return (
    <div className='containersignup' style={{alignContent:'center', textAlign:'center'}}>
      
    
      <div className='signup' style={{marginTop:"70px",marginLeft:"480px"}}>
        <h1 className='heading' style={{margin:0}}>Signup</h1>
        <hr/>
        <input type="text" placeholder="Enter FirstName" className='inputsignup' ></input>
        <input type="text" placeholder="Enter LastName" className='inputsignup' ></input>
        <input type="text" placeholder="Enter Email" className='inputsignup' ></input>
        <input type="password" placeholder="Enter Password" className='inputsignup' ></input>
        <input type="text" placeholder="Enter Gender" className='inputsignup' ></input>
        <input type="text" placeholder="Enter Address" className='inputsignup' ></input>
        
        <button className='submit' >Sign in</button><br/>
        <a href="">forgot password</a><br/>
        <br/>
        <a href='/signup' className='link'>login</a><p style={{float:'right'}}>You have already Account?</p>
        

        
      </div>
      
    </div>
  )
}

export default SignUp1