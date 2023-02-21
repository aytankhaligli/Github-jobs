import React from "react";
import work from "../assets/images/work.svg";
import "../styles/Searchbar.css";

export default function Searchbar({ inputData, setInputData, searchJob }) {
  return (
    <div className="search-box">
      <div className="searchbar">
        <img src={work} alt="bag icon" className="icon" />
        <input
          type="text"
          placeholder="Title, companies, expertise or benefits"
          className="search-input"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button className="btn-search" onClick={searchJob}>
          Search
        </button>
      </div>
    </div>
  );
}
