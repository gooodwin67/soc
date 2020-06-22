import React from 'react'
import c from './MyPosts.module.css'
import Post from './Post/Post'
import AddPost from '../AddPost/AddPost'

class MyPosts extends React.Component {
    render() {
        return (
            <div className = {c.myposts}>
                <AddPost />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        )    
    }
}

export default MyPosts