import React from "react";
import CardItem from "./CardItem";
import allman from "../Images/allman.jpg";
import akut from "../Images/akut.jpg";
import estetisk from "../Images/estetisk.jpg";
import "./Cards.css";


function Cards(){
    return(
        <>
        <div className="cards" id={"services"}>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <h1 className="cards-wrapper-h1">Behandlingar</h1>
                    <ul className="cards-list">
                        <CardItem
                        src={allman}
                        text="Allmän Tandvård"
                        path="/" />
                        <CardItem
                        src={akut}
                        text="Akut Tandvård"
                        path="/" />
                    </ul>
                    <ul className="cards-list">
                    <CardItem
                        src={estetisk}
                        text="Estetisk Tandvård"
                        path="/" />
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Cards