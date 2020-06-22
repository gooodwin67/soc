import React from 'react'
import c from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


class Profile extends React.Component {
    render() {
        return(
            <div className = {c.profile}>
                <div>ava + desc</div>
                <div>My post</div>
                <div>New post</div>
                <MyPosts />
            </div>
        )
    }
}

export default Profile