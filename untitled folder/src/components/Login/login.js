import React , {useState} from 'react'
import {useNavigate, Link} from 'react-router-dom'
import './login.css'
import logo1 from '../logo.png';
const Login = () => {
    
  const navigate= useNavigate();
  
  const [credentials, setCredentials]= useState({email: "",password: "",type:""});
  const handleSubmit= async (e)=>{
    e.preventDefault();
   
    const response = await fetch("http://localhost:4000/login", {
        method: 'POST', 
         headers: {
          'Content-Type': 'application/json',
         // 'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZTQwMmNhOGE0ZDkzMmM1YjQ1OTI0In0sImlhdCI6MTYzOTg1ODIyMH0.uC2EcwPUtIIuMlru4AJSRF2wjJv6IQ1s1b9moJMXlS8'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify({email:credentials.email, password:credentials.password  }) // body data type must match "Content-Type" header
      });
      const json= await response.json()

      if(json.success){
        //redirect
        localStorage.setItem("token",json.authtoken)
        navigate("/");
      }else{
        alert("invalid credentials")
      }
      console.log(json)
}
const onChange =(e)=>{ 
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }





  
  return (
        <>
        <div className='logdiv'></div>
        <div className='container col-3  p-5 logindiv border' >
          
   <img className='my-2 text-success' src={logo1} height={80}></img> 
        <p className=' text-success'> <b>__________________</b></p> 
         <h1 className='my-2 text-success'><b>Login</b></h1> 
         <p className='mb-4 text-success'>Get Started for Free Now with Best Service of Requirement Elicitation</p> 
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3 ">
 
 <input type="email " className="form-control" id="email" name='email' value={credentials.email}  onChange={onChange} placeholder="&#xf658;   Email" required />
</div>
<div className="mb-3">
  <input type="password" className="form-control" id="password" name='password' value={credentials.password} onChange={onChange} placeholder="&#xf084;  Password" required />
</div>

<button type="submit" className='btn btn-success mt-4 w-50'><i class="fa-solid fa-arrow-right-to-bracket me-2 fa-lg" ></i>Login</button>
<br/>
<p className='text-muted mt-4'>Welcome Back! We are very happy to see you Here Login to Access the GamifyReqElicit </p>
<div className='mt-4'>
<Link className=' me-3 ' to='/signup'>Create an Account</Link>
<Link className='m-3 ' to='/'>Forget Password</Link>

</div>
</form>

</div>

        </>
    )
}

export default Login
