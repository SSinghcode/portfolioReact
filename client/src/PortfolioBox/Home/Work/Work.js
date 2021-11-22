import React from 'react'
import Header from '../Header/Header'
import "./Work.css";
import  web1 from "../../../assets/Home/web1.JPG"
import  web2 from "../../../assets/Home/web2.JPG"
import  web3 from "../../../assets/Home/web3.JPG"

export default function Work() { 
    return (
        <div className="flex">
        <h3 id="work">Work</h3>
        <div>
            <h3 className="heading">Project1</h3>
            <a href="https://wickette.github.io/V_A_S_T/" target="_blank">
                <img className="img1" src={web1} alt="web1"/>
            </a>
        </div>

        <div>
            <h3 className="heading">Project2</h3>
            <a href="https://spooky-sights.herokuapp.com/homepage" target="_blank">
            <img className="img1" src={web2} alt="web2"/>
            </a>
        </div>

        <div>
            <h3 className="heading">Quiz Challenge</h3>
            <a href="https://vcapella.github.io/04_code-quiz/" target="_blank">
            <img className="img1" src={web3} alt="web3"/>
            </a>
        </div>  
        <h3 id="contact">Contact</h3>
    </div>
    )
}
