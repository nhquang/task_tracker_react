import React from 'react'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router-dom'
import PropTypes from 'prop-types'

var style = {
    backgroundColor: "#F8F8F8",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "25px",
    width: "100%",
};

const Footer = () =>{
    let location = useLocation();
    return(
        
        <footer>
            {location.pathname === "/" && <p>Copyright &copy; 2021</p>}
            {location.pathname === "/" && <Link to="/about">About</Link>}
        </footer>
    );
}

Footer.propTypes = {
    name: PropTypes.string.isRequired
}
export default Footer;