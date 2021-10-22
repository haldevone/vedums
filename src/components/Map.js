import React from "react";
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
require ("dotenv").config("./.env");


function Maps(){
    return ( 
        <GoogleMap 
        defaultZoom={18} 
        defaultCenter={{lat:58.170669168746336,lng:12.99518014604598}} 
        >
        <Marker position={{lat:58.170669168746336,lng:12.99518014604598}} />
        </GoogleMap>
     );
}

const WrappedMap = withScriptjs(withGoogleMap(Maps));
 

export default function Map(){
    return(
       <div style={{width: '100%', height: '100%' , paddingTop: '1rem'}}>
            <WrappedMap 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `600px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
            />
       </div>
    );
}