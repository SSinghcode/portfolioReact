import React from "react";

import Profile from "./Profile";
import Footer from "./Footer/Footer";
import Work from "./Work/Work";
import "./Main.css";
import Header from "./Header/Header";

export default function Main(props) {
  return (
    <div className="maincontainer" id={props.id || ""}>
      <Header />
      <Profile />
      <Work/>
      <Footer/>
    </div>
  );
}