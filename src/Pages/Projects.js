import React from "react";
import one from "../Data/Portfolioimg/one.png";
import two from "../Data/Portfolioimg/two.png";
import three from "../Data/Portfolioimg/three.png";
import four from "../Data/Portfolioimg/four.png";
import five from "../Data/Portfolioimg/five.png";
import six from "../Data/Portfolioimg/six.png";
import seven from "../Data/Portfolioimg/seven.png";
import eight from "../Data/Portfolioimg/eight.png";
import nine from "../Data/Portfolioimg/nine.png";
import "./Projects.css";

const Portfolio = () => {
  return (
    <div id="portfolio" data-aos="fade-in">
      <div className="container">
        <div className="row">
          <div className="col-sm-11 offset-sm-1">
            <div className="row">
              <div className="col-sm-12">
                <h2>Portfolio</h2>
                <br />
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={one} className="img-fluid" alt="one" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={two}
                    className="img-fluid"
                    alt="two"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={three}
                    className="img-fluid"
                    alt="three"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img src={four} className="img-fluid" alt="four" />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
        
                   <img src={five} alt="five"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec" data-aos="zoom-in">
                  <img
                    src={six}
                    className="img-fluid"
                    alt="six"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={seven}
                    className="img-fluid"
                    alt="seven"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img
                    src={eight}
                    className="img-fluid"
                    alt="eight"
                  />
                </div>
              </div>
              <div className="col-sm-4">
                <div className="imgsec">
                  <img src={nine} className="img-fluid" alt="nine" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
