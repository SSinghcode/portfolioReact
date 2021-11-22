import React, { useState } from "react";
import "./Contact.css";
export default function Contact() {
    return (
        <div className="contactcontainer"> 
            <h3 id="contact">Contact</h3>
            <p id ="p">Please reach me @ Shamsherturna101@gmail.com</p>
            
             <form className="form">
          
            <label htmlFor="name">Name</label>
            <input type="text"/>

            <label htmlFor="email">Email</label>
            <input type="email"  />

            <label htmlFor="message">Message</label>
            <textarea type="text"  />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </form> 
        </div>
    )
}
