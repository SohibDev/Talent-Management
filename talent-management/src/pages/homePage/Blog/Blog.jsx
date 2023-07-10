import React from "react";
import "./blog.css";
import Dots from "../../../images/DotsHero.png";
import Designer from "../../../images/designer2.png";
import Developer from "../../../images/developer.png";

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-content">
        <h2 className="blog-title">Our Blog</h2>
        <p className="blog-description">
          Our ecosystem is comprised of talented IT professionals and Software
          Developers who are passionate about technology.
        </p>
      </div>
      <div className="blog-items" data-aos="zoom-out-up">
        <ul>
          <li className="blog-item">
            <img className="blog-image" src={Designer} alt="" />
            <div className="blog-item-content">
              <p className="blog-item-description">
                Set on a practical project-based training model with the purpose
                of improving the skills of Software Developers.
              </p>
              <a className="blog-item-link" href="">
                Learn More &#10146;
              </a>
            </div>
            <div className="blog-training">
              <p>Training</p>
            </div>
          </li>
          <li className="blog-item">
            <img className="blog-image" src={Developer} alt="" />
            <div className="blog-item-content">
              <p className="blog-item-description">
                Set on a practical project-based training model with the purpose
                of improving the skills of Software Developers.
              </p>
              <a className="blog-item-link link2" href="">
                Learn More &#10146;
              </a>
            </div>
            <div className="blog-training tr2">
              <p>Marketplace</p>
            </div>
          </li>
          <li className="blog-item">
            <img className="blog-image" src={Designer} alt="" />
            <div className="blog-item-content">
              <p className="blog-item-description">
                Set on a practical project-based training model with the purpose
                of improving the skills of Software Developers.
              </p>
              <a className="blog-item-link link3" href="">
                Learn More &#10146;
              </a>
            </div>
            <div className="blog-training tr3">
              <p>Startup</p>
            </div>
          </li>
        </ul>
        <img className="blog-dots" src={Dots} alt="" />
      </div>
    </div>
  );
};

export default Blog;
