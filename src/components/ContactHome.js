import React from "react";
import "./ContactHome.css";
// import emailjs from "emailjs-com";


const ContactHome = () => {

    function sendEmail(e){
        //e.preventDefault
    }

    return (  
        <div className="contacthome">
            <h1>Maila Oss</h1>
            <form onSubmit={sendEmail}>
                <label htmlFor="">Namn</label>
                <input type="text" name="namn" id="" />

                <label htmlFor="">Telefonnummer</label>
                <input type="text" name="tel" id="" />

                <label htmlFor="">Epost</label>
                <input type="text" name="epost" id="" />

                <label htmlFor="">Meddelande</label>
                <textarea name="message" rows="4" />

                <input type="submit" value="Skicka" />
            </form>
            
        </div>
        
    );
}
 
export default ContactHome;