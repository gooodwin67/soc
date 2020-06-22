import React from 'react';
import c from './Navbar.module.css'


class Navbar extends React.Component {
    render() {
        return(
            <div className = {c.navbar}>
                <ul>
                    <li><a href = '#'>Profile</a></li>
                    <li><a href = '#'>Messages</a></li>
                    <li><a href = '#'>News</a></li>
                    <li><a href = '#'>Music</a></li><br />
                    <li><a href = '#'>Setings</a></li>
                </ul>
            </div>
        )
    }
}

export default Navbar