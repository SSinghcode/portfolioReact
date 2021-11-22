import React from "react";

import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Work from "./Work/Work";
import "./Main.css";
import Header from "./Header/Header";
import Contact from "./Contact/Contact";

export default function Main(props) {
  return (
    <div className="maincontainer" id={props.id || ""}>
      <Header />
     <Profile/>
      <Work/>
      <Contact/>
      <Footer/>
    </div>
  );
}