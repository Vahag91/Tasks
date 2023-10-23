import React from "react"
import {FaFacebook,FaSquareXTwitter,FaGooglePlusG,FaYoutube,FaLinkedin} from  "react-icons/fa6"
import './footer.css'




export default function Footer(){

    return(
        <footer className="footer">
        <div className="footer-content">
          
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo iste corrupti doloribus odio sed!</p>
            <ul className="socials">
                <li><a href="#"> <FaFacebook/> </a></li>
                <li><a href="#"><FaGooglePlusG/></a></li>
                <li><a href="#"><FaLinkedin/></a></li>
                <li><a href="#"><FaSquareXTwitter/></a></li>
                <li><a href="#"><FaYoutube/></a></li>
            </ul>
        </div>
        <div className="footer-bottom">
            <p>copyright &copy;2020 codeOpacity. designed by</p>
        </div>
    </footer>
    )
}