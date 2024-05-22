import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/Blog.css';
import Footer from './Footer';
import BaobabFull from '../images/BaobabFull.png';



const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('https://public-api.wordpress.com/rest/v1.1/sites/mysite1748.wordpress.com/posts/')
        .then(res => {
            setPosts(res.data.posts);
        })
        .catch(err => console.log(err));
    }, []);

    return (
        <div className="blog">
            <div className="section1">
                <h1 className="heading">Blog Posts</h1>
            </div>
            <div className="topArea">
                <h1>Engaging, Informative, Visual</h1>
            </div>
            <div className="post-container">
                {posts.map(post => (
                    <div key={post.id} className="post">
                        <div className="date">
                            <p>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                        </div>
                        <div className="content">
                        <div className="content-image">
                                <img src={post.featured_image || BaobabFull} alt={post.title.rendered} />
                            </div>
                            <div className="content-text">
                                <h2>{post.title}</h2>
                                <p dangerouslySetInnerHTML={{ __html: post.excerpt}}></p>
                            </div>
                        </div>
                        <div className="link">
                            <Link to={`/post/${post.id}`}>Read More</Link>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
