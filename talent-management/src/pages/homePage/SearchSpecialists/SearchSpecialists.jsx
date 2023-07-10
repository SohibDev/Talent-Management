import React from "react";
import "./searchSpecialists.css";
import Portfell from "../../../images/suitcases.png";
import SearchBtn from "../../../images/lupa.svg";

const SearchSpecialists = () => {
  return (
    <div className="searchSpeciality" data-aos="fade-up">
      <div className="mainContainer">
        <h1>Hire a specialist</h1>
        <p className="mainContainer-text">
          Type in the name of the position, company or job category you are
          looking for
        </p>
        <div className="searchContainer">
          <div className="imageContainer">
            <div className="specialityImageCon">
              <img className="specialtyImage" src={Portfell} alt="" />
            </div>
            <p className="categoryText">Category</p>
          </div>
          <hr />
          <input
            className="skillInput"
            type="text"
            placeholder="Search skill..."
          />
          <button className="searchButton">
            <img className="searchIcon" src={SearchBtn} alt="" />
            Search
          </button>
        </div>
        <div className="categoryContainer">
          <p className="chooseText">or Choose ...</p>
          <ul className="categoryList">
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Full Stack Developer</p>
                <p className="categoryCount о">324</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Java Developerr</p>
                <p className="categoryCount">51</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">UI/UX Designer</p>
                <p className="categoryCount">259</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">IOS Developer</p>
                <p className="categoryCount">231</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Web Developer</p>
                <p className="categoryCount">222</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Copywriter</p>
                <p className="categoryCount">219</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Graphic Designer</p>
                <p className="categoryCount">192</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Illustrator</p>
                <p className="categoryCount">176</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Video Editor</p>
                <p className="categoryCount">154</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Front End Dev</p>
                <p className="categoryCount">142</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">3D Modeler</p>
                <p className="categoryCount">128</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Officer</p>
                <p className="categoryCount">102</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Content Creator</p>
                <p className="categoryCount">95</p>
              </div>
            </li>
            <li className="categoryItem">
              <div className="item-container">
                <p className="categoryName">Translator</p>
                <p className="categoryCount">72</p>
              </div>
            </li>
          </ul>
          <p className="moreCategoriesText">More categories &#10132;</p>
        </div>
      </div>
    </div>
  );
};

export default SearchSpecialists;
