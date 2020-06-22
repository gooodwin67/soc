import React from 'react'
import c from './Header.module.css'


class Header extends React.Component {
    render() {
        return(
            <div className = {c.header}>Header</div>
        )
    }
}

export default Header