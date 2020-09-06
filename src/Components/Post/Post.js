import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import "./Post.css"
const Post = (props) => {
    const {title, body, id} = props.item
    return (
        <div className="main-section">
            <h2> {title} </h2>
            <h4> {body} </h4>
            <p> <Link to={`/about/${id}`}>
            <Button variant="contained" color="primary">
      click Here
    </Button>
                </Link></p>
        </div>
    );
};

export default Post;