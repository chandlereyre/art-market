import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Navbar extends React.Component {
    constructor(props) {
        super(props)

    }


    render() {
        return (
            <div className="navbar-wrapper">
                <div className="left-column">
                    <NavLink to="/about" className={(navData) => navData.isActive ? "nav-link-active" : "" }>About</NavLink>
                    <NavLink to="/products" className={(navData) => navData.isActive ? "nav-link-active" : "" }>Products</NavLink>
                    <NavLink to="/wallpapers" className={(navData) => navData.isActive ? "nav-link-active" : "" }>Wallpapers</NavLink>
                </div>
                <div className="right-column">
                    <NavLink exact="true" name="home" to="/" className={(navData) => navData.isActive ? "nav-link-active" : "" }><FontAwesomeIcon icon="fa-house" /></NavLink>
                </div>
            </div>
        );
    }
        
}

export default Navbar;