import React from "react";
import globe from "../assets/images/globe.svg";
import clock from "../assets/images/clock.svg";
import { Link } from "react-router-dom";
import "../styles/JobCard.css";

export default function JobCard({
  name,
  title,
  fullTime,
  city,
  date,
  logo,
  id,
}) {
  let style;
  if (fullTime === "false") style = { display: "none" };
  return (
    <Link to={id} className="job-card">
      <div className="job-img">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div className="job-description">
        <p className="job-firma">{name}</p>
        <p className="job-name">{title}</p>
        <p className="job-full" style={style}>
          Full time
        </p>
      </div>
      <div className="card-corner">
        <div className="job-location">
          <img src={globe} alt="globe icon" className="job-globe-icon" />
          <p>{city}</p>
        </div>
        <div className="job-date">
          <img src={clock} alt="globe icon" className="job-clock-icon" />
          <p>{date}</p>
        </div>
      </div>
    </Link>
  );
}
