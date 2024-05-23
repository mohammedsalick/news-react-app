import React, { useState } from "react";
import transition from "../transition";

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("general");

  const handleCategoryClick = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <span className="badge bg-light text-dark fs-4">News Here</span>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <div
              className={`nav-link ${activeCategory === "technology" ? "active" : ""}`}
              onClick={() => handleCategoryClick("technology")}
            >
              Technology
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeCategory === "business" ? "active" : ""}`}
              onClick={() => handleCategoryClick("business")}
            >
              Business
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeCategory === "health" ? "active" : ""}`}
              onClick={() => handleCategoryClick("health")}
            >
              Health
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeCategory === "science" ? "active" : ""}`}
              onClick={() => handleCategoryClick("science")}
            >
              Science
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeCategory === "sports" ? "active" : ""}`}
              onClick={() => handleCategoryClick("sports")}
            >
              Sports
            </div>
          </li>
          <li className="nav-item">
            <div
              className={`nav-link ${activeCategory === "entertainment" ? "active" : ""}`}
              onClick={() => handleCategoryClick("entertainment")}
            >
              Entertainment
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default transition(Navbar);
