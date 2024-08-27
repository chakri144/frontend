//nimport React from 'react'
import axios from "axios";
import { FormEvent, useState } from "react";
export default function Login () {
   const [name,setName] = useState('')
	const [password,setPassword]=useState('')
	const login=(e:FormEvent) =>{
		e.preventDefault()
		const loginUser =
		{

			name,
			password,
		};
      console.log("name: -- >"+name)
      console.log("password: -->"+password)
		console.log("user: "+loginUser)
		axios.post("http://localhost:8080/fsd/login",loginUser)
		.then(res => console.log(res.data))
	};
  return (
<div>
<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css" />
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
<script src="//code.jquery.com/jquery-1.11.1.min.js"></script>


<div className="sidenav">
         <div className="login-main-text">
            <h2>Application Login Page</h2>
            <p>Login or register from here to access.</p>
         </div>
      </div>
      <div className="main">
         <div className="col-md-6 col-sm-12">
            <div className="login-form">
               <form onSubmit={login}>
                  <div className="form-group">
                     <label>User Name</label>
                     <input type="text" className="form-control" placeholder="User Name" onChange={e=>setName(e.target.value)}/>
                  </div>
                  <div className="form-group">
                     <label>Password</label>
                     <input type="password" className="form-control" placeholder="Password" onChange={p=>setPassword(p.target.value)}/>
                  </div>
                  <input  type="submit" value="Login" />
                  <button type="submit" className="btn btn-secondary">Register</button>
               </form>
            </div>
         </div>
      </div>
</div>   
  )
}
