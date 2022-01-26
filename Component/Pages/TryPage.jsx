import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const TryPage = () => {
    //to get value after / from url 
  let {id}=useParams();
  // to get query fron url after '?'
  let query=new URLSearchParams(useLocation().search);
  return (<div>
      <h1>id is {id}</h1>
      <h1>First query is {query.get("first")}</h1>
      <h1>Second query is {query.get("last")}</h1>

  </div>);
};

export default TryPage;
