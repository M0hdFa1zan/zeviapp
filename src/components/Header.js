import React from 'react'
import "./Header.css"
import zevi_logo from "../Assets/SVGs/zevi_logo_svg.svg";

function Header() {
    return (
        <div className="home_header">
            <img src={zevi_logo} alt="" />
        </div>
    )
}

export default Header