import React from 'react'
import c from './AddPost.module.css'

class AddPost extends React.Component {
    render() {
        return (
            <div className = {c.add_post}>
                <h3>ADD POST</h3>
                <textarea></textarea>
                <button>Add post</button>
            </div>
        )    
    }
}

export default AddPost