import React from "react";

import Profile from "./Profile";
import Footer from "./Footer/Footer";

import "./Main.css";

export default function Main(props) {
  return (
    <div className="maincontainer" id={props.id || ""}>
      
      <Profile />
      <Footer />
    </div>
  );
}