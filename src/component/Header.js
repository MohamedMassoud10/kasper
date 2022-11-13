import { setSelectionRange } from "@testing-library/user-event/dist/utils"
import React, { useRef } from "react"
import { Link } from "react-router-dom"
import '../index.css'
let Header =()=>{
    let [scroll,setScroll]=React.useState(false)
    let [menu,setMenu]=React.useState(false)
    let [active,setActive]=React.useState()
    let Home=React.useRef()
    let Services=React.useRef()
    let Portfolio=React.useRef()
    let About=React.useRef()
    let Contact=React.useRef()
    let Pricing=React.useRef()
    let handelMenu=()=>{
        setMenu((p)=>!p)
    }
    let activeClass=(E)=>{
        Home.current.className=""
        Services.current.className=""
        Portfolio.current.className=""
        About.current.className=""
        Contact.current.className=""
        Pricing.current.className=""
        E.target.className="active"
    }
    React.useEffect(() => {
    window.addEventListener("scroll",()=>{
        if(window.scrollY>100){
            setScroll(true)
        }else{
            setScroll(false)
        }
    })
    }, []);
    let scrollTop=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
    return(
        <div className="Home">
        <div className="overlay"></div>
        <div className="Header">
            <a href="#" className="logo">
                <img src="../imges/p1.png"></img>
            </a>
            <ul>
            <li><Link  to="/" onClick={activeClass} ref={Home}>Home</Link></li>
            <li><a href="#serv" onClick={activeClass} ref={Services}>Services</a></li>
            <li><a href="#prot" onClick={activeClass} ref={Portfolio}>Portfolio</a></li>
            <li><a href="#about"onClick={activeClass} ref={About}>About</a></li>
            <li><Link to="Contact"onClick={activeClass} ref={Contact}>Contact</Link></li>
            <li><Link to="Pricing" onClick={activeClass} ref={Pricing}>Pricing</Link></li>
            <li><i class="fa-sharp fa-solid fa-magnifying-glass search"></i></li>
            </ul>
            <div><i class="fa-solid fa-bars menu" onClick={handelMenu} ></i></div>
            <div className={menu?"toggle-menu":"hidMenu"}>
            <div className="ul">
            <i class="fa-solid fa-caret-up arrow"></i>
            <li><a className="active" href="#">Home</a></li>
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
        <div className={scroll?"display-scroll":"scroll-to-top"} onClick={scrollTop}>
        <i class="fa-solid fa-circle-chevron-up"></i>
        </div>
        </div>
    )
}
export default Header