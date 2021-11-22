import React from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
// import { Navbar } from 'react-bootstrap'
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="">Portfolio</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">

                        <a className="nav-link" href="#application">Experience</a>
                    </li>
                    <li className="nav-item">

                        <a className="nav-link" href="#work">Work</a>

                    </li>

                    <li className="nav-item">

                        <a className="nav-link" href="#skills">About me</a>

                    </li>
                    <li className="nav-item">

                        <a className="nav-link" href="#contact">Contact</a>

                    </li>
                    <li className="nav-item">

                        <a className="nav-link" href="https://www.linkedin.com/in/shamshersingh-/" target="_blank">LinkedIn</a>

                    </li>
                    <li className="nav-item">

                        <a className="nav-link" href="https://github.com/SSinghcode?tab=repositories" target="_blank">GitHub</a>

                    </li>
                </ul>
            </div>

        </nav>
    )
}
