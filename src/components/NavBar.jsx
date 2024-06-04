import React from "react";
import menu from '../assets/img/menu.svg'

function NavBar (){
    return (
        <>
        <ul className=" hover:bg-red-600 hidden sm:flex text-[18px] 
        sm:w-[438px] sm:place-content-around sm:text-[16px] 
        sm:items-center">
            <li>
               <a href="#">MLB</a>
            </li>
            <li>
               <a href="#">NBA</a> 
            </li>
            <li>
               <a href="#">F1</a> 
            </li>
            <li>
                <a href="#">SOCCER</a>
            </li>
            <li>
                <a href="#">LIDOM</a>
            </li>
        </ul>

        <img className="w-10 h-
        cursor-pointer sm:hidden " src={menu} alt="" />
        </>
    )
}

export default NavBar

