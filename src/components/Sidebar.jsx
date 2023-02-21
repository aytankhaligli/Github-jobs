import React from "react";
import globe from "../assets/images/globe.svg";
import "../styles/Sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
      <form className="fulltime-checkbox">
        <input type="checkbox" className="fulltime-input" />
        <label className="fulltime-label">Full time</label>
      </form>

      <form>
        <label className="location-label">Location</label>
        <div className="location-searchbar">
          <img src={globe} alt="globe icon" className="globe-icon" />
          <input
            type="text"
            placeholder="City, state, zip code or country"
            className="location-input"
          />
        </div>
      </form>

      <ul className="city-list">
        <li>
          <form className="list-item">
            <input type="checkbox" className="city-input" />
            <label className="city-label">London</label>
          </form>
        </li>
        <li>
          <form className="list-item">
            <input type="checkbox" className="city-input" />
            <label className="city-label">Amsterdam</label>
          </form>
        </li>
        <li>
          <form className="list-item">
            <input type="checkbox" className="city-input" />
            <label className="city-label">New York</label>
          </form>
        </li>
        <li>
          <form className="list-item">
            <input type="checkbox" className="city-input" />
            <label className="city-label">Berlin</label>
          </form>
        </li>
      </ul>
    </div>
  );
}
