import React from 'react'
import PropTypes from 'prop-types'

function Button({text, click, color}) {
    let style = {
        backgroundColor : color
    }
    return (
        <button className="btn" onClick = {click} style={style} >{text}</button> 
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}


export default Button
