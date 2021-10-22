import React from 'react';
import headImg from "../Images/tandborste.jpg";
import "./HeaderHome.css";
import { Link } from "react-scroll";

const HeaderHome = () => {
    return (
        <div className="headerHome">
            <div className="headerhome-wrapper">
                <div className="headerhome-container">
                    <h1>Vedums Tandvård</h1>
                    <p>Vi erbjuder allmän vuxen- och barntandvård</p>
                </div>
                <div className="btn-container"> 
                    <button className="btn-outline" >
                        <i class="fas fa-phone-alt"></i> 0512-40630
                    </button>
                    <Link to="maps" smooth="true" duration="800">
                        <button className="btn">
                            <i class="fas fa-map-marker-alt"></i> Hitta Hit
                        </button>
                    </Link>
                </div>
            </div>
           
        </div>
    );
};

export default HeaderHome;