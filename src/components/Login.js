import React,{useState} from 'react'
import './styles/login.css'
import image from './images/loginbg.jpg'
import AdminHome from './AdminHome'

export const UserContext = React.createContext()
function Login() {
  const [uname,setUname]=useState('')
  const [pwd, setPwd] = useState('')

  const submit=()=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw=JSON.stringify({"username":uname,"password":pwd})
    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    fetch(`http://127.0.0.1:8000/api/login`, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result["user"].is_superuser)
      console.log(result["email"])
      if(result["user"].is_superuser){
        localStorage.setItem('id',result["user"].id)
        window.location.assign("http://localhost:3000/admin");
    }
      else{
        localStorage.setItem('id',result["user"].id)
      window.location.assign("http://localhost:3000/user");
      }
    })
    .catch(error => {console.log('error', error)
    window.location.assign("http://localhost:3000/login");
  });

  }
  return (
    <div className='container' style={{alignContent:'center', textAlign:'center',margin:"100px",marginLeft:"500px"}}>
      
    
      <div className='login'>
        <h1 className='heading' style={{margin:0}}>Login</h1>
        <hr/>
        <input type="text" placeholder="enter username" className='input' value={uname} onChange={e=>setUname(e.target.value) }></input>
        <input type="password" placeholder="enter password" className='input' value={pwd} onChange={e=>setPwd(e.target.value)}></input>
        <button className='submit' onClick={submit}>Sign in</button><br/>
        <a href="">forgot password</a><br/>
        <br/>
        <a href='/signup' className='link'>Sign up</a><p style={{float:'right'}}>New User?</p>
        

        
      </div>
      
    </div>
  )
}

export default Login