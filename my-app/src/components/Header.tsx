import React from "react";
import Home from "./Home";
import Name from "./Name";
import Logout from "./Logout";
import "../styles/Dashboard.css"

const Header: React.FC = () => {
    return (
           <div className = 'header'>
                <Home />
                <Name />
                <Logout />
           </div>
    )
}

export default Header;
