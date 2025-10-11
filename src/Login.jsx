import React from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
  const navigate=useNavigate();
  return (
    <div className='login-page'>
<div className='login'>
<div className='p-4'>
    <h5 style={{fontFamily:"sans-serif",fontWeight: "700",marginLeft:"70px"}}>Login to User Account</h5>
  <p style={{fontFamily:"Helvetica Neue",marginLeft:"50px",fontSize:"13px"}}>Enter your email and password to access your dashboard</p>
</div> 
 <div style={{marginLeft:"70px", marginTop:"-20px"}}>
    <label htmlFor='email' className='label'>Email</label><br></br>
    <input type='text' name="email"  id="email" placeholder='abc@gmail.com' />
  <br></br>
     <label htmlFor='email' className='label'>Password</label><br></br>
    <input type='password' name="password"  id="password" />

      <div className='login-btn'><button type="button" onClick={()=>navigate("/dashboard")}>Login</button>
      <p style={{paddingTop:"15px",marginLeft:"70px",fontSize:"14px"}}>Forget Password?</p>
      <p style={{marginLeft:"30px",fontSize:"14px"}}>Don't have an account? <span style={{color:"blue"}}>Register here?</span></p></div>
  </div>

  </div>
    </div>
  )
}

export default Login