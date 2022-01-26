import React, { useEffect, useState } from 'react';

const Login = () => {
  let [Status,setStatus]=useState('false');
  let response = undefined;



  async function getToken(username, password) {
    return fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    }).then((res) => res.json());
  }
    let token= getToken();
    console.log(token);
    function checkUsers(){

    }
  return <div className='LoginM'>
        <form className="loginF" action="" method="post">
                    <h2>Here you can login</h2>
                    <label htmlFor="userN">Username</label>
                    <br/>
                    <input type="text" name="userN" title="Username"/>
                    <br/>
                    <label htmlFor="pass">Password</label><br/>
                    <input type="password" name="pass" title="pass"/>
                    <br/>
                    <br/>
                    <input onClick={checkUsers} className="btn-grad"type="button" value="login"/>
                </form>
  </div>
  ;
};

export default Login;
