import React from "react";
import "./expirance.css";
import Dots from '../../../images/DotsHero.png'
import Wallet from '../../../images/Wallet.svg'
import Education from '../../../images/Education.svg'
import Ecommerce from '../../../images/Ecommerce.svg'
import Bitcoin from '../../../images/Bitcoin.svg'
import EcoWide from '../../../images/ecowide.svg'
import Economic from '../../../images/economic.svg'

const Expirance = () => {
  return (
    <div className="experience" data-aos="zoom-in">
      <div className="expiranceContainer">
        <div className="inner-container">
          <div className="nested-container">
            <h1 className="main-heading">Industries Experience</h1>
            <p className="description">
              The scope of our industry experience across multiple markets
              combined with proven talent
            </p>
            <img className="dots-image" src={Dots} alt="" />
          </div>
        </div>
        <ul className="list">
          <li className="list-item">
            <div className="item-container">
              <img className="item-image" src={Wallet} alt="" />
              <h3 className="item-heading">Fintech</h3>
              <p className="item-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
          </li>
          <li className="list-item">
            <div className="item-container">
              <img className="item-image" src={Education} alt="" />
              <h3 className="item-heading">Ed Tech</h3>
              <p className="item-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
          </li>
          <li className="list-item">
            <div className="item-container">
              <img className="item-image" src={Ecommerce} alt="" />
              <h3 className="item-heading">Ecommerce</h3>
              <p className="item-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
          </li>
          <li className="list-item">
            <div className="item-container">
              <img className="item-image" src={Bitcoin} alt="" />
              <h3 className="item-heading">Blockchain</h3>
              <p className="item-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
          </li>
          <li className="list-item">
            <div className="item-container">
              <img className="item-image" src={EcoWide} alt="" />
              <h3 className="item-heading">Agri Tech</h3>
              <p className="item-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
          </li>
          <li className="list-item">
            <div className="item-container">
              <img className="item-image" src={Economic} alt="" />
              <h3 className="item-heading">Production</h3>
              <p className="item-description">
                Lorem ipsum dolor sit amet. consectur adipiscing.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Expirance;
