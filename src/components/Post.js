// Post.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './Post.css';

const Post = () => {
    const [post, setPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/mysite1748.wordpress.com/posts/${id}`)
        .then(res => {
            setPost(res.data); // Change this line
        })
        .catch(err => console.log(err));
    }, [id]);

    if (!post) return <div>Loading...</div>;

    return (
        <div className="post-page">
            <div className="topArea">
            </div>
        <div className="post-header" style={{backgroundColor: 'black', color: 'white', textAlign: 'center'}}>
            <h1>{post.title.rendered}</h1> {/* Change this line */}
            <p>{post.date}</p>
        </div>
        <div className="post-content">
            <img src={post.featured_image} alt={post.title.rendered} /> {/* Change this line */}
            <p dangerouslySetInnerHTML={{ __html: post.content.rendered }}></p> {/* Change this line */}
        </div>
        </div>
    );
};

export default Post;
