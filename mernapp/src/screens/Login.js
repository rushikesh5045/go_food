import React,{useState} from'react';

import { Link, useNavigate } from 'react-router-dom'
export default function Login() {


  const [credentials, setCredentials] = useState({email:"",password:""});
  let navigate = useNavigate();
  const submitHandler = async(e)=>{
    e.preventDefault();
    const response = await fetch("https://go-food-myw0.onrender.com/api/loginUser",{
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify({password:credentials.password,email:credentials.email,})
    });
    const json = await response.json();
    console.log(json);
    
    if(!json.success){
      alert("Enter Valid Credentials");
    }
    if(json.success){
      localStorage.setItem("userEmail",credentials.email)
      localStorage.setItem("authToken",json.authToken)
      navigate('/');
    }
  }
  
  const onChangeHandler = (e)=>{
    setCredentials({...credentials,[e.target.name]:e.target.value})
  }
  return (
    <div>
        
        <div className = "container">
      <form onSubmit={submitHandler}>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            name="email"
            value={credentials.email}
            onChange={onChangeHandler}
          />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
            name="password"
            value={credentials.password}
            onChange={onChangeHandler}
          />
        </div>
       
        <button type="submit" className="btn btn-success m-3">
          Submit
        </button>
        <Link to='/createUser' className="btn m-3 bg-danger">New user ?</Link>
      </form>
      </div>
    </div>
  )
}
