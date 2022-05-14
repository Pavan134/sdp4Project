import React,{useState} from 'react'
import axios from 'axios';
import './styles/signup.css'

function SignUp() {
  const [first_name,setFirst_name]=useState("")
  const [last_name,setLast_name]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [address,setAddress]=useState("")
  const [username,setUsername]=useState("")
  const [gender,setGender]=useState("")
  const submit=()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw=JSON.stringify({"first_name":first_name,"last_name":last_name,"email":email,"password":password,"address":address,"username":username,"gender":gender})
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch(`http://127.0.0.1:8000/api/register`, requestOptions)
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
    window.location.assign("http://localhost:3000/login");
    
  }


  return (
    <div className='containersignup' style={{alignContent:'center', textAlign:'center'}}>
      <div className='signup' style={{marginTop:"70px",marginLeft:"480px"}}>
      <h1 className='heading' style={{margin:0}}>Signup</h1>
        <hr/>
       <input type="text" value={first_name} onChange={e=>setFirst_name(e.target.value)}placeholder="Enter FirstName" className='inputsignup'/>
       
       <input type="text" value={last_name} onChange={e=>setLast_name(e.target.value)}placeholder="Enter LastName" className='inputsignup'/>
       
      <input type="text" value={username} onChange={e=>setUsername(e.target.value)}placeholder="Enter UserName" className='inputsignup'/>
       
       <input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter Email" className='inputsignup'/>
       
       <input type="password" value={password} onChange={e=>setPassword(e.target.value)}placeholder="Enter Password" className='inputsignup'/>
       
       <input type="gender" value={gender} onChange={e=>setGender(e.target.value)}placeholder="Enter Gender" className='inputsignup'/>
       
       <input type="text" name="address" value={address} onChange={e=>setAddress(e.target.value)} placeholder="Enter Address" className='inputsignup'/>
       
       
       <input type="submit"  onClick={submit} value="sign up" className='submit'></input><br/>
       <a href="">forgot password</a><br/>
        <br/>
        <a href='/login' className='link'>login</a><p style={{float:'right'}}>You have already Account?</p>
       </div>
    </div>
  )
}

export default SignUp