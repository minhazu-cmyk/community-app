import React, { useState, useEffect } from 'react';
import CommentsItems from '../CommentItems/CommentsItems';


const Comments = (props) => {
    
    const [comment, setComment] = useState([]);
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${props.item}`)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    
    return (
        <div>
           {
             comment.map(x=> <CommentsItems item={x}></CommentsItems> )   
           }
        </div>
    );
};

export default Comments;