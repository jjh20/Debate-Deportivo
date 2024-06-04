import React from "react";
import dIcon from '../assets/img/dIcon.png'
import NavBar from "./NavBar";



function Header (){
 return (
    <header className="flex place-content-between items-center">
        <img src={dIcon} alt="logo" />
        <NavBar />
    </header>
 );
}

export default Header;



