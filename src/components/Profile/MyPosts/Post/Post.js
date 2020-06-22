import React from 'react'
import c from './Post.module.css'

class Post extends React.Component {
    render() {
        return (
            <div className = {c.post}>
                <div className = {c.ava}>
                    <img src = 'https://skillbridge.ru/wp-content/uploads/stm_lms_avatars/stm_lms_avatar4.jpg?v=1580233064' />
                </div>
                <div className = {c.post_text_block}>
                    <div className = {c.post_text}>
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum 
                    </div>
                    <div className = {c.post_like_block}>
                        <span>Like</span>
                    </div>
                </div>
            </div>
        )    
    }
}

export default Post