import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
  let [Status,setStatus]=useState(false);
  let response = undefined;
  let user="Nimesh";
  const password="Nimesh@123";
  const [username, setUsername] = useState();
  const [pass, setPassword] = useState();
  const navigate = useNavigate();
  
  
  let readuser=(e)=>{
    setUsername(e.target.value);
    console.log(username);
  }
  function readpass(value){
      console.log(value);
      setPassword(value);
      console.log(pass);
  }
  
  function login(){
    console.log(username);
    console.log(user);
    console.log(pass);
    console.log(password);
    console.log("clicked");
    if(username==user && pass==password){
        setStatus('true');
        console.log(Status);
        navigate('/account');
        
      }
      else{

        setStatus('false');
        navigate('/error');

    }
  }
  // async function getToken(username, pass) {
  
  //   return fetch("https://fakestoreapi.com/auth/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username: username,
  //       password: pass,
  //     }),
  //   }).then((res) => res.json());
  // }
  // async function checkUsers(){
     
    
  //   const response = await getToken(username, pass);
  //   console.log('asda');
  //   if (response.token) {
  //     console.log(response.token);
  //     localStorage.setItem("token", JSON.stringify(response));

  //     setToken(response.token);
  //     navigate("/products");
  //     // setError(false);
  //   }
  //     // let response = getToken(username,pass);
  //     // console.log(response);
  //     // if (response.token) {
  //     //   // console.log(response.token);
  //     //   localStorage.setItem("token", JSON.stringify(response));
  //     //   // setToken(response.token);
  //     //   navigate("/account");
  //     //   // setError(false);
  //     // }
  //   }
    
  return <div className='LoginM'>
        <form className="loginF"  method="post">
                    <h2>Here you can login</h2>
                    <label htmlFor="userN">Username ({user})</label>
                    <br/>
                    <input type="text" name="userN"  title="Username" onChange={readuser}/>
                    <br/>
                    <label htmlFor="pass">Password({password})</label><br/>
                    <input type="password"  name="pass" title="pass" onChange={(event)=>{readpass(event.target.value)}}/>
                    <br/>
                    <br/>
                    <input onClick={login} className="btn-grad" type="button" value="login"/>
                </form>
  </div>
  ;
};

export default Login;
