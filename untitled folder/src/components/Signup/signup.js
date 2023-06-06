import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import './signup.css';
import logo1 from '../logo.png';
const Signup = () => {
  const [credentials, setCredentials]= useState({fname:"",lname:"",email: "",password: "", cpassword: "", type:"none"});
  const navigate= useNavigate();

  const handleSubmit= async (e)=>{
    e.preventDefault();
    console.log(credentials.type)
if(credentials.password===credentials.cpassword){
   const response = await fetch("http://localhost:4000/createuser", {
        method: 'POST', 
         headers: {
         'Content-Type': 'application/json',
         // 'auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFiZTQwMmNhOGE0ZDkzMmM1YjQ1OTI0In0sImlhdCI6MTYzOTg1ODIyMH0.uC2EcwPUtIIuMlru4AJSRF2wjJv6IQ1s1b9moJMXlS8'
         // 'Content-Type': 'application/x-www-form-urlencoded',
       },
       body: JSON.stringify({fname:credentials.fname,lname:credentials.lname, email:credentials.email, password:credentials.password, type:credentials.type}) // body data type must match "Content-Type" header
     });
      const json= await response.json()
     
        //redirect
       // localStorage.setItem("token",json.authtoken)
        navigate("/login");
      }else{
        alert('Please Match the password')
      }
      
    }
const onchange =(e)=>{ 
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
 
  const myFunction=(e)=> {
    // Get the checkbox
    var checkBox = document.getElementById("type");
    // Get the output text
    
  
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      setCredentials({...credentials,[e.target.name]:e.target.value})
    } 
  }





    return (
      <>
        
        <div className='  signdiv  '>
        </div>
        <div className='container col-3  p-5 border signup' >
        <img className='my-2 text-success' src={logo1} height={80}></img> 
        <p className=' text-success'> <b>__________________</b></p>  
         <h4 className=' text-success'><b>Sign Up</b> </h4>
         <p className=' mb-4 text-success'>Get Started with Best Service of Requirement Elicitation </p>          
          <form action="" onSubmit={handleSubmit}>
            <div className="mb-3 ">
  <input type="text" className="form-control" id="fname" name='fname' value={credentials.fname} onChange={onchange} placeholder="&#xf2b9;  FirstName" required/>
</div>

<div className=" mb-3">
  <input type="text" className="form-control" id="lname" name='lname' value={credentials.lname} onChange={onchange} placeholder="&#xf2b9;  LastName" required/>
</div>
<div className="mb-3">
 <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onchange} placeholder="&#xf658;  Email" required/>
</div>
<div className="mb-3">
  <input type="password" className="form-control" id="password"  name='password' value={credentials.password} onChange={onchange} placeholder="&#xf084;  Password" required/>
</div>
<div className="mb-3">
  <input type="password" className="form-control" id="cpassword" name='cpassword' value={credentials.cpassword} onChange={onchange} placeholder="&#xf084;  Confirm Password" required/>
</div>
<div className="form-check ">
  <input className="form-check-input ms-1 " type="checkbox" name="type"  value='PM' onChange={onchange} id="type"/>
  <label className="form-check-label text-muted" htmlFor="flexCheckDefault">
    Check it to Create Account as PM
  </label>
</div>
<button type="submit" className='btn btn-success my-3 w-50'><i className="fa-solid fa-user-plus me-2"></i>Signup</button>
<p className='text-muted'>Already Have an Account? <span className='text-success' >Signin</span></p>
</form>
</div>


        
        </>
    )
}

export default Signup
