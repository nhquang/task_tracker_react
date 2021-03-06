import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title, onclick, show}) => {
    
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text = {show ? "Close" : "Add a Task"} color = {show ? "red" : "green"} click={onclick}/>
        </header>
    )
}
Header.defaultProps ={
    title: 'Task Tracker'
}
Header.propTypes = {
    title: PropTypes.string
}
export default Header;
