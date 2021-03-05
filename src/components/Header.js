import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title}) => {
    let click = ()=>{
        console.log("clicked");
    };
    return (
        <header className="header">
            <h1>{title}</h1>
            <Button text = "Add a task" color = "grey" click={click}/>
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
