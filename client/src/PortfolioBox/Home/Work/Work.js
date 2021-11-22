import React from 'react'
import Header from '../Header/Header'
import "./Work.css";
import web1 from "../../../assets/Home/web1.JPG"
import web2 from "../../../assets/Home/web2.JPG"
import web3 from "../../../assets/Home/web3.JPG"
import web4 from "../../../assets/Home/web4.JPG"
import web5 from "../../../assets/Home/web5.JPG"
import web6 from "../../../assets/Home/Web6.JPG"
export default function Work() {
    return (
        <div className="flex">
            <h3 id="work">Work</h3>
            <div className="left">
                <h3 className="heading">Code refactor</h3>
                <img className="img1" src={web1} alt="web1" />
                <div>
                    <a href="https://github.com/SSinghcode/code" target="_blank">
                        GitHub Link
                    </a>
                    <br />
                    <a href="https://ssinghcode.github.io/code/" target="_blank">
                        Deployed Link
                    </a>
                </div>
            </div>

            <div>
                <div className="left">
                    <h3 className="heading">Password Generator</h3>
                    <img className="img1" src={web2} alt="web2" />
                    <a href="https://github.com/SSinghcode/passwordgenerator" target="_blank">
                        GitHub Link
                    </a>
                    <br />
                    <a href="https://ssinghcode.github.io/passwordgenerator/" target="_blank">
                        Deployed Link
                    </a>
                </div>
            </div>
            <div>
                <div className="left">
                    <h3 className="heading">Quiz Challenge</h3>
                    <img className="img1" src={web3} alt="web3" />
                    <a href="https://github.com/SSinghcode/codequiz" target="_blank">
                        GitHub Link
                    </a>
                    <br />
                    <a href="https://ssinghcode.github.io/codequiz/" target="_blank">
                        Deployed Link
                    </a>
                </div>
            </div>
            <div>
                <div className="left">
                    <h3 className="heading">Work Day Scheduler</h3>
                    <img className="img1" src={web4} alt="web4" />
                    <a href="https://github.com/SSinghcode/dailyPlanner" target="_blank">
                        GitHub Link
                    </a>
                    <br />
                    <a href="https://ssinghcode.github.io/dailyPlanner/" target="_blank">
                        Deployed Link
                    </a>
                </div>
            </div>
            <div>
                <div className="left">
                    <h3 className="heading">Note Taker</h3>
                    <img className="img1" src={web5} alt="web5" />
                    <a href="https://github.com/SSinghcode/noteTaker" target="_blank">
                        GitHub Link
                    </a>
                    <br />
                    <a href="https://shamshernotetaker.herokuapp.com/" target="_blank">
                        Deployed Link
                    </a>
                </div>
            </div>
            <div>
                <div className="left">
                    <h3 className="heading">Fitness Traker</h3>
                    <img className="img1" src={web6} alt="web6" />
                    <a href="https://github.com/SSinghcode/fitnessTracker" target="_blank">
                        GitHub Link
                    </a>
                    <br />
                    <a href="https://shamfitnesstarcker.herokuapp.com/" target="_blank">
                        Deployed Link
                    </a>
                </div>
            </div>

        </div>
    )
}
