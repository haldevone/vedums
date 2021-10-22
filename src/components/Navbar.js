// import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";
import imgLogo from "../Images/Logo.png";
import { Link } from "react-scroll";



function Navbar(){

    const[click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    return(
        <>
        <div className="nav">
            <div className="nav-container">
                <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
                    <img src={imgLogo} alt="" />
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className="nav-item">
                        <Link to="services" smooth="true" duration="800" className="nav-links" onClick={closeMobileMenu}>
                            Behandlingar
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="contact" smooth="true" duration="1100"  className="nav-links" onClick={closeMobileMenu}>
                            Kontakt
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link  to="prices" smooth="true" duration="900"  className="nav-links" onClick={closeMobileMenu}>
                            Priser
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                            Om Oss
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default Navbar;