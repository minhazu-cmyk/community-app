import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';

const Home = () => {
   const [user, setUser] = useState([])
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>setUser(data))
    },[]) 
    return (
       <div>
          <h1> Total post: {user.length} </h1>
          {
               user.map(x=> <Post item={x} ></Post> )
           }
       </div>


    );
};

export default Home;