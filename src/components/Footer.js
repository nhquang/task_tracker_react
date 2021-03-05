import React from 'react'
import PropTypes from 'prop-types'

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "20px",
    width: "100%",
};

const Footer = ({name}) =>{
    return(
        <div style ={style}>
            {name}
        </div>
    );
}

Footer.propTypes = {
    name: PropTypes.string.isRequired
}
export default Footer;