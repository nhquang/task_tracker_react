import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
import {useLocation} from 'react-router-dom'
const Header = ({title, onclick, show}) => {
    let location = useLocation();
    return (
        <header className="header">
            <h1>{title}</h1>
            {location.pathname === "/" && <Button text = {show ? "Close" : "Add a Task"} color = {show ? "red" : "green"} click={onclick}/>}
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
