import React from 'react'
import PostCard from './PostCard'
import { useState, useEffect } from 'react'

const PostList = () => {
    // create a comonent state for the data
    const [postData, setPostData] = useState([]);

    // write a fetch function 
    const fetchPost = async () => {
         
        try {
            const url = "http://localhost:5045/posts/api/fetch-all";
            const result = await fetch(url);
            const data = await result.json();
            console.log('Posts', data.data);
            setPostData(data.data);
        } catch (error) {
            console.log(error.message);
        }
    }
    // call the fetch func inside useEffect
    useEffect(() => {
        fetchPost();
    }, [])
    return (
        <div>
            {postData.map((post) => (
                <PostCard  postObj={post}/>
            ))}
        </div>
    )
}

export default PostList