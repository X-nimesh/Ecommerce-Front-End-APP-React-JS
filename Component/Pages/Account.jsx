import React, { useEffect, useState } from 'react'

const Account = () => {
  let [members,setMembers]=useState(undefined);
  let users= undefined;
  let response= undefined;

  useEffect(() => {
    fetchUsers();
    // fetch("https://fakestoreapi.com/users/1")
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         setMembers(data);
    //     })
  }, []);
  async function fetchUsers(){
    response = await fetch("https://fakestoreapi.com/users/1")//fetch the data
    users=await response.json();
    setMembers(users);
    // console.log(users);
   }
  

 console.log(members);
 let imgL="https://i1.wp.com/growmetachem.com/wp-content/uploads/2020/09/Business-Male-Icon-Vector-User-Icon-Avatar-PNG-and-Vector-with-Transparent-Background-for-Free-Download.jpg?ssl=1"
if(members==undefined){
  return (
    <h1>
      Loading.....
    </h1>
  )
}
else{
  console.log(members.phone);
  return <div className='member-detail'>
      <h1>
          My Account
      </h1>
      <div className="detailA">
        <img src={imgL} alt="" />
        <h1>{members.name.firstname+' '+members.name.lastname}</h1>
        <p>Username: {members.username}</p>
        <p>E-mail: {members.email}</p>
        <p>Phone: {members.phone}</p>
      </div>
  </div>;
}
};

export default Account;
