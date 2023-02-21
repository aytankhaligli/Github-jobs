import React from "react";
import "../styles/Description.css";
import globe from "../assets/images/globe.svg";
import clock from "../assets/images/clock.svg";
import { useParams } from "react-router-dom";

export default function Description({ jobs }) {
  let { id } = useParams();
  const { name, title, fulltime, city, date, logo, content } =
    jobs && jobs?.find((job) => job.id === id);

  let style;
  if (fulltime === "false") style = { display: "none" };
  return (
    <div>
      <div className="header">
        <h1 className="title">{title}</h1>
        <p className="job-full" style={style}>
          Full time
        </p>
      </div>
      <div className="job-date">
        <img src={clock} alt="globe icon" className="job-clock-icon" />
        <p>{date}</p>
      </div>
      <div className="job-box">
        <div className="img">
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="description">
          <p className="name">{name}</p>
          <div className="job-location">
            <img src={globe} alt="globe icon" className="job-globe-icon" />
            <p>{city}</p>
          </div>
        </div>
      </div>

      <div className="text">{content}</div>
    </div>
  );
}
