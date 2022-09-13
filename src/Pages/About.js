import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" data-aos="zoom-in" data-aos-duration="1200">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="aboutcontent">
              <h2>About Me</h2>
              <p>
                I'm a Front End Developer & a Graphics Designer. I love to solve
                design problems, develop new features and design prototypes
                using different mediums. My work is mainly focused on
                frontend-development. As for graphic designs, my work mainly
                involves photo manipulation. Besides, I also like doing
                photography and videography, where I can express my creative
                thought process.
              </p>
              <h2>Technical skills</h2>
              <p>-HTML,CSS,Javasript and Bootstrap<br></br>
               -Python(Django),C++<br></br>
               -React,Redux,Mongo and Deployment
               </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
