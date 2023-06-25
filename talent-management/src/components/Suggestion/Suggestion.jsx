import React from "react";
import "./Suggestion.css";
import Level from "../../images/level.svg";
import MakingPortfolio from "../../images/MakinPortf.svg";
import BestDev from "../../images/Becoingbestr.svg";
import Improvment from "../../images/improving.svg";
import FinJob from "../../images/finfing.svg";
import Increasing from "../../images/increasing.svg";
import Designer from "../../images/Desighner.png";
import Child from "../../images/child.png";
import Developer from "../../images/Developer2.png";

const Suggestion = () => {
  return (
    <div className="container suggestion" data-aos="fade-up" >
      <h2 className="suggestion-heading">Pass the test and get hired</h2>
      <div className="suggestion-wrapper">
        <ul className="images-suggest">
          <li className="image-bind">
            <div className="image-suggest">
              <img className="image-section-image" src={Level} alt="" />
              <div className="image-section-text">
                <p>find out your level in IT</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
          </li>
          <li className="image-bind">
            <div className="image-suggest">
              <img className="image-section-image" src={MakingPortfolio} alt="" />
              <div className="image-section-text">
                <p>create your portfolio</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
              </div>
            </div>
          </li>

          <li className="image-bind">
            <div className="image-suggest">
              <img className="image-section-image" src={Level} alt="" />
              <div className="image-section-text">
                <p>become the best IT specialist find</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod
                </p>
              </div>
            </div>
          </li>
          <li className="image-bind">
            <div className="image-suggest">
              <img className="image-section-image" src={BestDev} alt="" />
              <div className="image-section-text">
                <p>improve your soft skills</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
          </li>
          <li className="image-bind">
            <div className="image-suggest">
              <img className="image-section-image" src={Improvment} alt="" />
              <div className="image-section-text">
                <p>find a dream job</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
          </li>
          <li className="image-bind">
            <div className="image-suggest">
              <img className="image-section-image" src={FinJob} alt="" />
              <div className="image-section-text">
                <p>increase your income</p>
                <p>
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
          </li>
        </ul>
        <div className="talent-section">
          <div>
            <p>Become</p>
            <h2 className="talent-section-heading">the best Uzbek Talent</h2>
            <div className="talent-section-images">
              <img className="talent-section-image" src={Designer} alt="" />
              <img className="talent-section-image" src={Child} alt="" />
              <img className="talent-section-image" src={Developer} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Suggestion;
