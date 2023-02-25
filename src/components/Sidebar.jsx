import React, { useState } from "react";
import globe from "../assets/images/globe.svg";
import "../styles/Sidebar.css";
export default function Sidebar({
  isFullTime,
  setInputCity,
  setIsFullTime,
  inputCity,
}) {
  const [isLondon, setIsLondon] = useState(false);
  const [isBerlin, setIsBerlin] = useState(false);
  const [isAmsterdam, setIsAmsterdam] = useState(false);
  const [isNewYork, setIsNewYork] = useState(false);
  return (
    <div className="sidebar">
      <form className="fulltime-checkbox">
        <input
          type="checkbox"
          className="fulltime-input"
          checked={isFullTime}
          onChange={() => setIsFullTime((pre) => !pre)}
        />
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
            value={inputCity}
            onChange={(e) => {
              setInputCity(e.target.value);
              setIsLondon(false);
              setIsBerlin(false);
              setIsAmsterdam(false);
              setIsNewYork(false);
            }}
          />
        </div>
      </form>

      <ul className="city-list">
        <li>
          <form className="list-item">
            <input
              type="checkbox"
              className="city-input"
              checked={isLondon}
              onChange={() => {
                setIsLondon((pre) => !pre);
                setIsBerlin(false);
                setIsAmsterdam(false);
                setIsNewYork(false);
                setInputCity("London");
              }}
            />
            <label className="city-label">London</label>
          </form>
        </li>
        <li>
          <form className="list-item">
            <input
              type="checkbox"
              className="city-input"
              checked={isAmsterdam}
              onChange={() => {
                setIsAmsterdam((pre) => !pre);
                setIsBerlin(false);
                setIsLondon(false);
                setIsNewYork(false);
                setInputCity("Amsterdam");
              }}
            />
            <label className="city-label">Amsterdam</label>
          </form>
        </li>
        <li>
          <form className="list-item">
            <input
              type="checkbox"
              className="city-input"
              checked={isNewYork}
              onChange={(e) => {
                setIsNewYork((pre) => !pre);
                setIsBerlin(false);
                setIsAmsterdam(false);
                setIsLondon(false);
                setInputCity("New York");
              }}
            />
            <label className="city-label">New York</label>
          </form>
        </li>
        <li>
          <form className="list-item">
            <input
              type="checkbox"
              className="city-input"
              checked={isBerlin}
              onChange={(e) => {
                setIsBerlin((pre) => !pre);
                setIsLondon(false);
                setIsAmsterdam(false);
                setIsNewYork(false);
                setInputCity("Berlin");
              }}
            />
            <label className="city-label">Berlin</label>
          </form>
        </li>
      </ul>
    </div>
  );
}
