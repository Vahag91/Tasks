import React from "react"
import './header.css'

export default function Header() {

    return (
        <div className="menuBar">
            <a  className="logo" href="#">Logo</a>


            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Example.webpage.com</a></li>
                <li><a href="#">En</a></li>
            </ul>
        </div>
    )
}