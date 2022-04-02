import React from "react";
import instalogo from "../images/instagram-logo.jpg"
import twittlogo from "../images/twitter-logo.jpg"
import gitlogo from "../images/github-logo.jpg"
import facelogo from "../images/facebook-logo.jpg"
import linklogo from "../images/linkedln-logo.jpg"
import "../css/footer.css";

export default function Footer(){
    return (
        <footer className="foot">
            <img src={twittlogo}></img>
            <img src={facelogo}></img>
            <img src={instalogo}></img>
            <img src={linklogo}></img> 
            <img src={gitlogo}></img> 
            
        </footer>
    )
    
}