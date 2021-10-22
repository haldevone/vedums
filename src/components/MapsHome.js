import React from "react";
import Map from "./Map";
import "./ContactHome.css";

const MapsHome = () => {
    return ( 
        <div className="mapshome" id={"maps"}>
            <h1>
                Hitta Hit
            </h1>
            <p>
                Vi finns centralt i Vedum i nyrenoverad klinik.
            </p>
            <Map />
        </div>
     );
}
 
export default MapsHome;