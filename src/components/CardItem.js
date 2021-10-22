import React from "react";
import { Link } from "react-router-dom";

const CardItem = (props) => {
    return ( 
        <>
        <li className="cards-item">
            <Link className="cards-item-link" to={props.path}>
            <div className="cards-item-info">
                    <h3>
                        {props.text}
                    </h3>
                </div>
                <img className="cards-item-img" src={props.src} alt="" />
            </Link>
            
        </li>
        </>
     );
}
 
export default CardItem;