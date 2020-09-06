import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Comments from '../Comments/Comments';

const PostDetails = () => {
    const {comment} = useParams();
    const [details, setDetails] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${comment}`)
        .then(res=>res.json())
        .then(data=>setDetails(data))
    },[])
    return (
        <div>
           
            <h1> {details.title} </h1>
            
            <h3>{details.body} </h3>
            <Comments item={comment}></Comments>


        </div>
    );
};

export default PostDetails;