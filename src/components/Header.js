import React from "react"
import portrait from "../images/foto cv.jpg"
import "../css/header.css";

export default function Header(){
    return(
        <div className="head">
            <img src={portrait}></img>
            <h1>Daniel Olivares</h1>
            <h2>frontend developer</h2>
            <h4>Daniel.website</h4>
            <button>Email</button>
        </div>
    )
}