import React from 'react'
import Typical from "react-typical";
export default function Profile() {
    return (
        <div className='pr-container'>
            <div className="pr-parent">
                <div className='pr-details'>
                    <div className='col'>
                   
                    <div className="colicon">
                    <a href="#">
                        <i className="fa fa-google-plus-square" />
                    </a>
                    <a href="https://www.instagram.com/turna.shamsher/">
                        <i className="fa fa-instagram" />
                    </a>
                    <a href="https://github.com/SSinghcode?tab=repositories">
                        <i className="fa fa-github" />
                    </a>
                    <a href="https://www.linkedin.com/in/shamshersingh-/">
                    <i className="fa fa-linkedin"></i>
                    </a>
                    </div>
          </div>
          <div className="pr-detailsname">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Shamsher Singh</span>
            </span>
          </div>
          <div className="pr-detailsrole">
            <span className="primary-text">
              {" "}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Full stack Developer 💻",
                    2500,
                    "Machine Learning Engineer 📱",
                    2500,
                    "Java EE Developer ❤",
                    2500,
                  ]}
                />
              </h1>
            </span>
            <span className="pr-roletageline">
             Web Applications and Artificial Intelligence Applications Developer
            </span>
          </div>

        
        </div>
       
      </div>
    </div>
  );
}
