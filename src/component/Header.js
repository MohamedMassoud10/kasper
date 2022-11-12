import React from "react"
import { Link } from "react-router-dom"
import '../index.css'
let Header =()=>{
    let [menu,setMenu]=React.useState(false)
    let [active,setActive]=React.useState()
    let handelMenu=()=>{
        setMenu((p)=>!p)
    }
    let activeClass=(E)=>{
        if(active==="active"){
            setActive("")
        }
        setActive("active")
        E.target.className=active;
    }
    return(
        <div className="Home">
        <div className="overlay"></div>
        <div className="Header">
            <a href="#" className="logo">
                <img src="../imges/p1.png"></img>
            </a>
            <ul>
            <li><Link  to="/" onClick={activeClass}>Home</Link></li>
            <li><Link to="Services" onClick={activeClass}>Services</Link></li>
            <li><Link to="Portfolio" onClick={activeClass}>Portfolio</Link></li>
            <li><Link to="About"onClick={activeClass}>About</Link></li>
            <li><Link to="Contact"onClick={activeClass}>Contact</Link></li>
            <li><Link to="Pricing" onClick={activeClass}>Pricing</Link></li>
            <li><i class="fa-sharp fa-solid fa-magnifying-glass search"></i></li>
            </ul>
            <div><i class="fa-solid fa-bars menu" onClick={handelMenu} ></i></div>
            <div className={menu?"toggle-menu":"hidMenu"}>
            <div className="ul">
            <i class="fa-solid fa-caret-up arrow"></i>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Contact</a></li>
            <li className="search"><i class="fa-sharp fa-solid fa-magnifying-glass t-s"></i>
            <input placeholder="  Search .."></input>
            </li>
            </div>
            </div>
        </div>
        <div class="text">
        <div class="content">
            <h2>
            Hello World! Massoud<br />
            We Are Kasper We Make Art.
            </h2>
            <p>
            Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet elit, eget tincidunt
            nibh pulvinar a. Curabitur aliquet quam. Accumsan id imperdiet et, porttitor at sem. Mauris blandit aliquet
            elit, eget tincidunt.
            </p>
        </div>
        </div>
        <i class="fa-solid fa-angle-right right-arrow"></i>
        <i class="fa-solid fa-angle-left left-arrow "></i>
        <div className="bullets">
            <div className="bullet"></div>
            <div className="bullet bt-c"></div>
            <div className="bullet"></div>
        </div>
        </div>

    )
}
export default Header