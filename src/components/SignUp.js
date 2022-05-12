import React from 'react'

function SignUp() {
  return (
    <div>
       First Name:<input type="text" placeholder="enter first name"/>
       <br/>
       Last Name:<input type="text" placeholder="enter Last name"/>
       <br/>
       Email:<input type="email" placeholder="enter Email"/>
       <br/>
       Password:<input type="password" placeholder="enter password"/>
       <br/>
       Enter Address:<textarea type="text" placeholder='enter address'/>
       <br/>
       Enter Mobile No:<input type="text" placeholder="enter Mobile number"/><br/>
       <input type="submit" value="sign up"></input>

       
    </div>
  )
}

export default SignUp