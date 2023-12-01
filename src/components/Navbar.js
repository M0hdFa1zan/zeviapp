import React from 'react'
import "./Navbar.css"
import zevi_logo from "../Assets/SVGs/zevi_logo_svg.svg";
import { RiSearch2Line } from "react-icons/ri";

function Navbar() {
    return (
        <div className="products_navbar">
            <div></div>
            <form className="input_container">
                <input type="text" className="home_input" placeholder="Search" />
                <button className="search_icon_container">
                    <RiSearch2Line size="24" />
                </button>
            </form>
            <img src={zevi_logo} alt="" />
        </div>
    )
}

export default Navbar