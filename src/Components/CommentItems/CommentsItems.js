import React from 'react';

const CommentsItems = (props) => {
const {name,id, email}= props.item;
const commentStyle={
    border:"1px solid green",
    margin:"18px",
    padding:"15px"
    
}
const imgStyle ={
    width:"30px",
    hight:"30px",
    margin:"10px",
    padding:"15px",
    borderRadius:"20px"
}
const img = 'https://i.pinimg.com/280x280_RS/1c/01/a7/1c01a7be32a6568d751e92d53d956907.jpg'
    return (
        <div style={commentStyle}>
             <img style={imgStyle} src={img} alt=""/> 
            <h1> id :{id} </h1>
            <h3> name: {name}  </h3>
            <p>email : {email} </p>
            
        </div>
    );
};

export default CommentsItems;